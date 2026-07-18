import React, { useEffect, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { CHANNEL } from "@/lib/i18n";
import { Languages } from "lucide-react";

function NavLink({ href, label }) {
  return (
    <a href={href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1">
      {label}
    </a>
  );
}

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-lg shadow-black/40" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={CHANNEL.logo}
              alt="logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover ring-1 ring-primary/40 group-hover:ring-primary transition-all"
            />
            <span className="absolute -bottom-0.5 -end-0.5 w-3 h-3 bg-green-400 rounded-full ring-2 ring-background animate-pulse" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-sm text-white truncate max-w-[160px]">
              {lang === "ar" ? CHANNEL.name_ar : CHANNEL.name_en}
            </div>
            <div className="text-[10px] font-mono-tech text-primary">⚡️ ZERO REVERSAL</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#features" label={t.nav.features} />
          <NavLink href="#results" label={t.nav.results} />
          <NavLink href="#howto" label={t.nav.join} />
          <NavLink href="#vip" label={t.nav.vip} />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 h-10 rounded-lg glass text-xs font-bold text-white hover:glow-cyan transition-all"
            aria-label="switch language"
          >
            <Languages className="w-4 h-4 text-primary" />
            <span className={lang === "ar" ? "opacity-100" : "opacity-50"}>ع</span>
            <span className="text-muted-foreground">/</span>
            <span className={lang === "en" ? "opacity-100" : "opacity-50"}>EN</span>
          </button>
          <a
            href={CHANNEL.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:glow-cyan transition-all pulse-glow"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}