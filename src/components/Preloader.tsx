"use client";
import { useEffect, useState } from "react";
import BrandLogo from "./ui/BrandLogo";
export default function Preloader() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setVisible(true);
    document.documentElement.classList.add("is-loading");
    const timer = setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("is-loading");
    }, 850);
    return () => {
      clearTimeout(timer);
      document.documentElement.classList.remove("is-loading");
    };
  }, []);
  // Not rendered on the server: content stays available without JavaScript.
  return visible ? (
    <div className="preloader" aria-hidden="true">
      <BrandLogo priority />
      <span>SEU PRÓXIMO PASSO</span>
    </div>
  ) : null;
}
