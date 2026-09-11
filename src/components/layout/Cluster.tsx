import React from "react";

interface ClusterProps {
  children: React.ReactNode;
  gap?: "xs" | "sm" | "md" | "lg";
  justify?: "start" | "center" | "end" | "between";
  align?: "start" | "center" | "end";
  className?: string;
}

export default function Cluster({
  children,
  gap = "md",
  justify = "start",
  align = "center",
  className = "",
}: ClusterProps) {
  const gapClasses = {
    xs: "gap-1.5",
    sm: "gap-2.5",
    md: "gap-4",
    lg: "gap-6",
  };

  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  return (
    <div
      className={`flex flex-wrap ${gapClasses[gap]} ${justifyClasses[justify]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </div>
  );
}
