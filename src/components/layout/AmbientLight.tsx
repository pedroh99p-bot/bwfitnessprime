import React from "react";

interface AmbientLightProps {
  position?: "top" | "center" | "bottom";
  intensity?: "subtle" | "medium";
  className?: string;
}

export default function AmbientLight({
  position = "top",
  intensity = "subtle",
  className = "",
}: AmbientLightProps) {
  const positionClasses = {
    top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/3",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3",
  };

  const intensityClasses = {
    subtle:
      "w-[320px] sm:w-[540px] lg:w-[720px] h-[320px] sm:h-[540px] lg:h-[720px] bg-bw-gold/6 blur-[120px] sm:blur-[160px]",
    medium:
      "w-[360px] sm:w-[600px] lg:w-[840px] h-[360px] sm:h-[600px] lg:h-[840px] bg-bw-gold/10 blur-[140px] sm:blur-[180px]",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${positionClasses[position]} ${intensityClasses[intensity]} ${className}`}
    />
  );
}
