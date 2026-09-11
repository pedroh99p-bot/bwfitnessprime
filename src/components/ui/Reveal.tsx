"use client";
import { useEffect, useRef } from "react";
export default function Reveal({
  children,
  variant = "up",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "up" | "side" | "stagger" | "fade";
  className?: string;
}) {
  const node = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = node.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.reveal = "waiting";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={node} className={`reveal reveal-${variant} ${className}`}>
      {children}
    </div>
  );
}
