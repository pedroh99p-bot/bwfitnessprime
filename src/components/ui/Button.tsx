import Link from "next/link";
export type ButtonVariant =
  "primary" | "secondary" | "ghost" | "icon" | "whatsapp";
interface Base {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}
type AsButton = Base &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Base> & {
    href?: undefined;
  };
type AsLink = Base &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof Base> & {
    href: string;
  };
export type ButtonProps = AsButton | AsLink;
export default function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth,
  className = "",
  disabled,
  href,
  ...rest
}: ButtonProps) {
  const classes = `button button-${variant} button-${size} ${fullWidth ? "w-full" : ""} ${className}`;
  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );
  if (href && !disabled) {
    const props = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return href.startsWith("http") ? (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  return (
    <button
      type="button"
      disabled={disabled}
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
