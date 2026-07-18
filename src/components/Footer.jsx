import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { CHANNEL } from "@/lib/i18n";
import { Send } from "lucide-react";

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();
  const name = lang === "ar" ? CHANNEL.name_ar : CHANNEL.name_en;

  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={CHANNEL.logo} alt="logo" className="w-10 h-10 rounded-xl object-cover ring-1 ring-primary/40" />
              <span className="font-display text-sm text-white">{name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{t.footer.about}</p>
          </div>

          <div>
            <h4 className="font-display text-sm text-white mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.features}</a></li>
              <li><a href="#results" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.results}</a></li>
              <li><a href="#howto" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.join}</a></li>
              <li><a href="#vip" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.vip}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm text-white mb-4">{t.footer.contact}</h4>
            <a
              href={CHANNEL.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:glow-cyan transition-all"
            >
              <Send className="w-4 h-4" />
              {t.footer.joinChannel}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} {name}. {t.footer.rights}.</span>
          <span className="font-mono-tech text-primary/70">⚡️ ZERO REVERSAL SYSTEM</span>
        </div>
      </div>
    </footer>
  );
}