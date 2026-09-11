import React from "react";

interface StackProps {
  children: React.ReactNode;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  className?: string;
}

export default function Stack({
  children,
  gap = "md",
  align = "stretch",
  className = "",
}: StackProps) {
  const gapClasses = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  return (
    <div
      className={`flex flex-col ${gapClasses[gap]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </div>
  );
}
