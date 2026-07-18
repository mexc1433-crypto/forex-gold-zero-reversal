import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numeric = parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 0;
    const isRange = String(value).includes("-");
    if (isRange) {
      setDisplay(value);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 1600;
          const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.floor(eased * numeric));
            if (p < 1) requestAnimationFrame(step);
            else setDisplay(numeric);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-mono-tech tabular-nums">
      {typeof display === "number" ? display.toLocaleString() : display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLang();
  return (
    <section id="stats" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full glass text-xs font-mono-tech text-primary mb-4">// {t.stats.title}</div>
          <h2 className="font-display text-3xl sm:text-5xl text-white tracking-tight">{t.stats.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t.stats.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.stats.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 text-center hover:glow-cyan transition-all group"
            >
              <div className="text-3xl sm:text-5xl font-display text-white group-hover:text-primary transition-colors">
                <Counter value={item.value} suffix={item.suffix} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}