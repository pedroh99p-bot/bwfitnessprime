"use client";
import { createContext, useContext, useState } from "react";
import Button, { type ButtonVariant } from "./Button";
import BottomSheet from "./BottomSheet";
import WhatsAppIcon from "./WhatsAppIcon";
import { buildWhatsAppUrl, CONTACT_MESSAGES } from "@/config/siteContent";

type Notice = { title: string; text: string; message?: string };
const ContactContext = createContext<(notice: Notice) => void>(() => {});
export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [notice, setNotice] = useState<Notice | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  return (
    <ContactContext.Provider
      value={(value) => {
        setNotice(value);
        setCopied(false);
        setCopyError(false);
      }}
    >
      {children}
      <BottomSheet
        open={!!notice}
        onClose={() => setNotice(null)}
        title={notice?.title || "Contato BW"}
      >
        <p className="muted">{notice?.text}</p>
        {notice?.message && (
          <div className="contact-message">
            <label htmlFor="contact-message">Sua mensagem está pronta</label>
            <textarea
              id="contact-message"
              readOnly
              value={notice.message}
              rows={5}
            />
            <Button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(notice.message!);
                  setCopied(true);
                } catch {
                  setCopyError(true);
                }
              }}
            >
              {copied ? "Mensagem copiada" : "Copiar mensagem"}
            </Button>
            <p role="status" className="small muted">
              {copyError
                ? "Selecione o texto acima para copiar manualmente."
                : copied
                  ? "Pronto. Você pode guardar a mensagem para falar com a equipe."
                  : ""}
            </p>
          </div>
        )}
        <a
          className="text-link"
          href="#localizacao"
          onClick={() => setNotice(null)}
        >
          Ver localização e referência ↗
        </a>
      </BottomSheet>
    </ContactContext.Provider>
  );
}
export function PendingLink({
  label,
  text,
  url = "",
  className = "",
}: {
  label: string;
  text: string;
  url?: string;
  className?: string;
}) {
  const open = useContext(ContactContext);
  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </a>
  ) : (
    <button className={className} onClick={() => open({ title: label, text })}>
      {label}
    </button>
  );
}
export default function ContactAction({
  children = "Falar no WhatsApp",
  message = CONTACT_MESSAGES.hero,
  variant = "primary",
  className = "",
  icon = true,
  onAction,
}: {
  children?: React.ReactNode;
  message?: string;
  variant?: ButtonVariant;
  className?: string;
  icon?: boolean;
  onAction?: () => void;
}) {
  const open = useContext(ContactContext);
  const href = buildWhatsAppUrl(message);
  const iconNode = icon ? <WhatsAppIcon /> : undefined;
  if (href)
    return (
      <Button
        href={href}
        variant={variant}
        iconLeft={iconNode}
        className={className}
        onClick={onAction}
      >
        {children}
      </Button>
    );
  return (
    <Button
      variant={variant}
      iconLeft={iconNode}
      className={className}
      onClick={() => {
        onAction?.();
        open({
          title: "Fale com a BW",
          text: "O WhatsApp oficial ainda será informado. Enquanto isso, você pode copiar sua mensagem e consultar a localização da academia.",
          message,
        });
      }}
    >
      {children}
    </Button>
  );
}
