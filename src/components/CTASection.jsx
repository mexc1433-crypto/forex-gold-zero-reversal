import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { CHANNEL, SIGNALS_IMG } from "@/lib/i18n";
import { Send, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  const { t } = useLang();
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={SIGNALS_IMG} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl sm:text-5xl text-white tracking-tight mb-4">{t.cta.title}</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t.cta.subtitle}</p>
        <a
          href={CHANNEL.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:scale-[1.03] transition-transform pulse-glow"
        >
          <Send className="w-5 h-5" />
          {t.cta.button}
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}