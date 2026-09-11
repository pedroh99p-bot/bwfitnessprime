import { Check } from "lucide-react";
export default function SelectableCard({
  children,
  selected = false,
  onSelect,
  disabled = false,
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  selected?: boolean;
  onSelect?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onSelect}
      className={`selectable-card ${selected ? "is-selected" : ""} ${className}`}
    >
      <span className="option-body">{children}</span>
      <span className="option-check" aria-hidden="true">
        {selected && <Check size={13} />}
      </span>
    </button>
  );
}
