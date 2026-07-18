import React, { useEffect, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { CHANNEL } from "@/lib/i18n";
import { ArrowUp, Send } from "lucide-react";

export default function BackToTop() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Sticky mobile join bar */}
      <div
        className={`sm:hidden fixed bottom-0 inset-x-0 z-50 p-3 transition-transform duration-500 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={CHANNEL.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-primary-foreground font-bold text-sm pulse-glow"
        >
          <Send className="w-4 h-4 fill-current" />
          {t.nav.cta}
        </a>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t.backToTop}
        className={`fixed bottom-20 sm:bottom-6 end-4 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:glow-cyan transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}