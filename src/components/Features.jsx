import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { Target, Zap, Trophy, Shield, Crown, Globe } from "lucide-react";

const ICONS = { target: Target, zap: Zap, trophy: Trophy, shield: Shield, crown: Crown, globe: Globe };

export default function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full glass text-xs font-mono-tech text-primary mb-4">// {t.features.tag}</div>
          <h2 className="font-display text-3xl sm:text-5xl text-white tracking-tight">{t.features.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[item.icon] || Target;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative glass rounded-2xl p-6 hover:glow-cyan transition-all overflow-hidden"
              >
                <div className="absolute -top-10 -end-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}