import React from "react";

interface GlassSurfaceProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "elevated";
  radius?: "default" | "pill" | "none";
  className?: string;
  as?: "div" | "nav" | "header" | "aside" | "section";
}

export default function GlassSurface({
  children,
  variant = "default",
  radius = "default",
  className = "",
  as: Component = "div",
}: GlassSurfaceProps) {
  const radiusClasses = {
    default: "rounded-[22px]",
    pill: "rounded-full",
    none: "rounded-none",
  };

  const variantClasses = {
    default:
      "bg-white/[0.045] border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)]",
    gold: "bg-white/[0.045] border border-bw-gold/30 shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.1)]",
    elevated:
      "bg-white/[0.055] border border-white/[0.10] shadow-[0_15px_45px_rgba(0,0,0,0.85)]",
  };

  return (
    <Component
      className={`backdrop-blur-[16px] -webkit-backdrop-blur-[16px] ${radiusClasses[radius]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
