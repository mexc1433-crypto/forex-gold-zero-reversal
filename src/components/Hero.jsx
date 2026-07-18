import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { CHANNEL, HERO_BG } from "@/lib/i18n";
import { ArrowDown, Users, Wifi, Play } from "lucide-react";

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 flow-gradient" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-col items-center gap-4 mb-8"
        >
          <div className="relative">
            <img
              src={CHANNEL.logo}
              alt={CHANNEL.name_ar}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-2 ring-primary/50 glow-cyan"
            />
            <span className="absolute -bottom-1 -end-1 px-2 py-0.5 rounded-full bg-red-500 text-white text-[9px] font-bold font-mono-tech flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" /> {t.hero.live}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-xs font-medium text-primary"
        >
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          {t.hero.tag}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl text-white leading-[1.05] tracking-tight"
        >
          <span className="block">{t.hero.title1}</span>
          <span className="block text-glow-cyan text-primary">
            {t.hero.title2} <span className="text-accent text-glow-gold">⚡️</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Live counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 flex items-center justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span className="font-mono-tech font-bold text-white">{CHANNEL.members.toLocaleString()}</span>
            <span>{t.hero.members}</span>
          </div>
          <span className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wifi className="w-4 h-4 text-green-400" />
            <span className="font-mono-tech font-bold text-white">{CHANNEL.online}</span>
            <span>{t.hero.online}</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CHANNEL.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:scale-[1.03] transition-transform pulse-glow"
          >
            <Play className="w-5 h-5 fill-current" />
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#results"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl glass text-white font-bold text-base hover:glow-cyan transition-all"
          >
            {t.hero.ctaSecondary}
            <ArrowDown className="w-5 h-5 text-primary" />
          </a>
        </motion.div>
      </div>

      <a href="#stats" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-primary transition-colors">
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
}