import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { CHANNEL, RESULTS_IMG } from "@/lib/i18n";
import { TrendingUp, CheckCircle2, ArrowUpRight } from "lucide-react";

function CounterOnce({ to, suffix = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const dur = 1500;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          setVal(Math.floor((1 - Math.pow(1 - p, 3)) * to));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref} className="font-mono-tech tabular-nums">{val}{suffix}</span>;
}

const TRADES = [
  { pair: "XAU/USD", dir: "BUY", entry: "2341.20", exit: "2368.40", pips: "+272", win: true },
  { pair: "XAU/USD", dir: "SELL", entry: "2375.10", exit: "2351.00", pips: "+241", win: true },
  { pair: "XAU/USD", dir: "BUY", entry: "2330.55", exit: "2362.30", pips: "+318", win: true },
  { pair: "XAU/USD", dir: "SELL", entry: "2380.00", exit: "2358.90", pips: "+211", win: true },
  { pair: "XAU/USD", dir: "BUY", entry: "2344.70", exit: "2379.00", pips: "+343", win: true },
];

export default function Results() {
  const { t } = useLang();
  return (
    <section id="results" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 flow-gradient opacity-60" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full glass text-xs font-mono-tech text-primary mb-4">// {t.results.tag}</div>
          <h2 className="font-display text-3xl sm:text-5xl text-white tracking-tight">{t.results.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t.results.subtitle}</p>
        </div>

        {/* KPI counters */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 sm:p-8 flex items-center gap-5 hover:glow-cyan transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="text-4xl font-display text-white"><CounterOnce to={142} /></div>
              <div className="text-sm text-muted-foreground">{t.results.liveSignals}</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-gold rounded-2xl p-6 sm:p-8 flex items-center gap-5 hover:glow-gold transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7 text-accent" />
            </div>
            <div>
              <div className="text-4xl font-display text-white"><CounterOnce to={91} suffix="%" /></div>
              <div className="text-sm text-muted-foreground">{t.results.successRate}</div>
            </div>
          </motion.div>
        </div>

        {/* Results table + visual */}
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <img
              src={RESULTS_IMG}
              alt="results"
              className="relative rounded-2xl ring-1 ring-primary/30 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </motion.div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <span className="font-mono-tech text-xs text-primary">// LIVE SIGNALS</span>
              <span className="flex items-center gap-1.5 text-xs text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> LIVE
              </span>
            </div>
            <div className="divide-y divide-border">
              {TRADES.map((tr, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center justify-between px-5 py-3.5 hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono-tech ${tr.dir === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                      {tr.dir}
                    </span>
                    <span className="font-mono-tech text-sm text-white">{tr.pair}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono-tech">
                    <span className="text-muted-foreground hidden sm:inline">{tr.entry} → {tr.exit}</span>
                    <span className="text-green-400 font-bold flex items-center gap-1">
                      {tr.pips} <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href={CHANNEL.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-6 rounded-xl glass text-white font-bold text-sm hover:glow-cyan transition-all"
          >
            {t.results.cta}
            <ArrowUpRight className="w-4 h-4 ms-2 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}