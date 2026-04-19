import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "23", sup: "yrs", label: "Since Inception" },
  { value: "96", sup: "%", label: "Placement Rate" },
  { value: "18k", sup: "+", label: "Alumni Worldwide" },
  { value: "42", sup: "", label: "Industry Partners" },
];

const NOTICES = [
  { tag: "Admissions", title: "B.Tech 2026 registrations — merit list released", date: "18 · APR · 2026", color: "tag-admission" },
  { tag: "Event", title: "Tech Samagam '26: National-level technical fest", date: "12 · APR · 2026", color: "tag-event" },
  { tag: "Notice", title: "Revised Fee Structure — Academic Year 2026–27", date: "05 · APR · 2026", color: "tag-notice" },
  { tag: "Result", title: "Semester VI results declared — RTMNU affiliated", date: "28 · MAR · 2026", color: "tag-result" },
];

export default function Hero() {
  return (
    <section className="bg-bg text-text px-5 lg:px-10 pt-[90px] lg:pt-[90px] relative overflow-hidden min-h-[760px]">
      {/* Decorative Gradients */}
      <div className="absolute -bottom-[60%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_0%,var(--color-accent),transparent_60%)] opacity-[0.03] pointer-events-none transition-opacity duration-300" />
      <div className="absolute inset-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[length:80px_80px] opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_50%_50%,black_20%,transparent_75%)]" />

      <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
        <div className="pt-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-[18px] mb-10 pb-[22px] border-b border-border"
          >
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-text-dim">Nagpur, Maharashtra</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-text-dim">NAAC A+ Accredited</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-text-dim">Session 2026–27</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[clamp(56px,9vw,130px)] leading-[0.95] tracking-tight mb-9 italic"
          >
            <span className="block not-italic">Where dawn</span>
            <span className="block pl-[14%] text-accent font-light">meets</span>
            <span className="block not-italic">discovery.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[19px] leading-relaxed max-w-[560px] text-text/80 mb-10 font-light"
          >
            For over two decades, Suryodaya College of Engineering & Technology has shaped the <em className="font-serif italic text-accent font-normal">engineers, leaders and thinkers</em> rewriting India's technological landscape — grounded in rigour, lifted by imagination.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-[60px]"
          >
            <a href="#programs" className="bg-accent text-bg px-[26px] py-[14px] text-[15px] font-semibold tracking-wide rounded-[4px] inline-flex items-center gap-2 hover:bg-surface-light hover:text-text transition-all border border-transparent hover:border-border">
              Explore Programs <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#about" className="text-text px-[26px] py-[14px] text-[15px] font-medium border border-border rounded-[4px] hover:border-accent hover:text-accent transition-all">
              Our Story
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 border-t border-border pt-8 max-w-[820px]"
          >
            {STATS.map((stat, i) => (
              <div key={i} className={`p-4 lg:p-0 lg:pr-[30px] border-border ${i !== STATS.length - 1 ? "lg:border-r" : ""}`}>
                <div className="font-serif text-[42px] leading-none mb-2 tracking-tighter">
                  {stat.value}<sup className="text-[16px] text-accent align-super">{stat.sup}</sup>
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.aside 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface border border-border rounded-[8px] p-[26px] self-start shadow-xl shadow-accent/5"
        >
          <div className="flex items-center justify-between pb-[18px] border-b border-border mb-5">
            <span className="font-serif text-[22px] tracking-tight text-text italic">Notice Board</span>
            <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_0_4px_var(--color-border)] animate-pulse" />
          </div>
          <div className="flex flex-col gap-[18px]">
            {NOTICES.map((notice, i) => (
              <div key={i} className={`pb-[18px] ${i !== NOTICES.length - 1 ? "border-b border-border" : ""}`}>
                <span className={`inline-block font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 mb-2.5 rounded-[4px] ${
                  notice.tag === 'Admissions' ? 'bg-accent/15 text-accent' :
                  notice.tag === 'Event' ? 'bg-text/10 text-text' :
                  notice.tag === 'Notice' ? 'bg-text-dim/20 text-text-dim' :
                  'bg-surface-light border border-border text-text-dim'
                }`}>
                  {notice.tag}
                </span>
                <div className="text-[14px] leading-snug font-medium mb-1.5">{notice.title}</div>
                <div className="font-mono text-[10px] opacity-40 tracking-wider font-medium">{notice.date}</div>
              </div>
            ))}
          </div>
          <div className="mt-[18px] pt-4 border-t border-border flex items-center justify-between text-[12px]">
            <span className="opacity-40">24 notices this month</span>
            <a href="#" className="text-accent flex items-center gap-1.5 font-medium hover:underline">View all <ArrowRight className="w-3 h-3 pt-0.5" /></a>
          </div>
        </motion.aside>
      </div>

      <div className="absolute left-5 lg:left-10 bottom-9 font-mono text-[10px] tracking-[0.18em] uppercase text-text/30 flex flex-col gap-1">
        <span>21.1458° N</span>
        <span>79.0882° E</span>
      </div>

      <svg className="absolute bottom-0 right-[5%] w-[220px] h-[110px] opacity-40 dark:opacity-90 transition-opacity" viewBox="0 0 220 110" fill="none">
        <path d="M0 105 L220 105" stroke="currentColor" className="text-border" strokeWidth="1" opacity="0.4"/>
        <circle cx="110" cy="105" r="52" fill="url(#sg)" opacity="0.9"/>
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" className="text-border" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="currentColor" className="text-border" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <path d="M40 105 L20 85 M60 105 L50 75 M80 105 L78 70 M110 105 L110 65 M140 105 L142 70 M160 105 L170 75 M180 105 L200 85" stroke="currentColor" className="text-border" strokeWidth="0.8" opacity="0.5"/>
      </svg>
    </section>
  );
}
