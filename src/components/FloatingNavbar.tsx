"use client";
import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BrandLogo from "./ui/BrandLogo";
import BottomSheet from "./ui/BottomSheet";
import ContactAction from "./ui/ContactAction";
import { CONTACT_MESSAGES, NAVIGATION } from "@/config/siteContent";

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 28);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <>
      <header className={`navbar-wrap ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="navbar" aria-label="Navegação principal">
          <Link href="#hero" aria-label="BW Prime Fitness — início">
            <BrandLogo priority />
          </Link>
          <div className="desktop-nav">
            {NAVIGATION.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <ContactAction
              message={CONTACT_MESSAGES.class}
              icon={false}
              className="nav-cta"
            >
              Agendar aula <ArrowUpRight size={14} />
            </ContactAction>
            <button
              className="icon-button menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>
      <BottomSheet
        open={open}
        title="Explore a BW"
        onClose={() => setOpen(false)}
      >
        <nav
          id="mobile-navigation"
          className="sheet-links"
          aria-label="Navegação mobile"
        >
          {NAVIGATION.map((link, i) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span className="mono small muted">0{i + 1}</span>
              {link.label}
              <ArrowUpRight size={20} />
            </a>
          ))}
        </nav>
        <ContactAction
          message={CONTACT_MESSAGES.class}
          onAction={() => setOpen(false)}
          className="w-full"
        >
          Agendar aula
        </ContactAction>
      </BottomSheet>
    </>
  );
}
