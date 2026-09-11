import React from "react";

interface BaseCardProps {
  children: React.ReactNode;
  variant?: "solid" | "interactive" | "gold-border";
  className?: string;
  onClick?: () => void;
}

export default function BaseCard({
  children,
  variant = "solid",
  className = "",
  onClick,
}: BaseCardProps) {
  const variantClasses = {
    solid: "bg-bw-surface-primary border border-white/10",
    interactive:
      "bg-bw-surface-primary border border-white/10 hover:border-bw-gold/40 hover:bg-bw-surface-secondary active:scale-[0.99] transition-all cursor-pointer",
    "gold-border":
      "bg-bw-surface-primary border border-bw-gold/40 shadow-[0_4px_24px_rgba(212,175,55,0.12)]",
  };

  return (
    <div
      onClick={onClick}
      className={`rounded-[18px] p-5 sm:p-6 flex flex-col justify-between ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
