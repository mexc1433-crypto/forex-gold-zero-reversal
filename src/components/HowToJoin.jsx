import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { CHANNEL, VIP_IMG } from "@/lib/i18n";
import { Crown, ArrowRight, Check } from "lucide-react";

const PERKS_AR = [
  "توصيات حصرية يومية",
  "تحليل أعمق للسوق",
  "نقاط دخول وخروج دقيقة",
  "متابعة مباشرة مع الفريق",
  "إدارة حسابات احترافية",
];
const PERKS_EN = [
  "Exclusive daily signals",
  "Deeper market analysis",
  "Precise entry & exit points",
  "Direct follow-up with the team",
  "Professional account management",
];

export default function HowToJoin() {
  const { t, lang } = useLang();
  const perks = lang === "ar" ? PERKS_AR : PERKS_EN;

  return (
    <>
      <section id="howto" className="relative py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full glass text-xs font-mono-tech text-primary mb-4">// {t.howto.tag}</div>
            <h2 className="font-display text-3xl sm:text-5xl text-white tracking-tight">{t.howto.title}</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t.howto.subtitle}</p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-6">
            {/* connecting line */}
            <div className="hidden md:block absolute top-12 inset-x-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            {t.howto.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative glass rounded-2xl p-7 text-center hover:glow-cyan transition-all"
              >
                <div className="relative mx-auto w-14 h-14 mb-5">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
                  <div className="relative w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center font-display text-xl text-primary">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-lg text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section id="vip" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <img src={VIP_IMG} alt="VIP access" className="relative rounded-2xl ring-1 ring-accent/40 w-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-gold text-xs font-mono-tech text-accent mb-5">
                <Crown className="w-3.5 h-3.5" /> {t.howto.vipBadge} ACCESS
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight mb-4">
                {lang === "ar" ? "القناة الخاصة" : "The Private Channel"}
                <span className="block text-accent text-glow-gold">VIP</span>
              </h3>
              <ul className="space-y-3 mb-8">
                {perks.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </span>
                    <span className="text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-5 py-3 rounded-xl glass-gold">
                  <span className="text-xs text-muted-foreground block">{lang === "ar" ? "الاشتراك الشهري" : "Monthly"}</span>
                  <span className="font-display text-2xl text-accent">$200</span>
                </div>
                <a
                  href={CHANNEL.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:glow-gold transition-all"
                >
                  {t.howto.join}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}