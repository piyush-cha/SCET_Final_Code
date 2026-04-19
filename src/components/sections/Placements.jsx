import { motion } from "motion/react";

const PLACEMENT_STATS = [
  { label: "Highest Package", value: "₹14", sup: "L", sub: "Global product company · CSE '25" },
  { label: "Average Package", value: "₹3.2", sup: "  L", sub: "Across all eligible branches" },
  { label: "Offers Extended", value: "612", sup: "", sub: "Including multiple offers per student" },
  { label: "Recruiting Firms", value: "142", sup: "  +", sub: "Core, product, consulting, PSUs" },
];

const RECRUITERS = [
  "Infosys", "TCS", "Wipro", "Accenture", "Capgemini", "Cognizant", "Deloitte", "L&T",
  "Mahindra", "Tata Steel", "Hero MotoCorp", "NTPC", "JSW", "Reliance", "HDFC Bank", "ZS Associates"
];

export default function Placements() {
  return (
    <section id="placements" className="py-[100px] lg:py-[140px] px-5 lg:px-10 bg-bg relative">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[100px] lg:items-end mb-20 pb-[50px] border-b border-border"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-5 font-bold">Placements · Season 2025</div>
            <h2 className="font-serif text-[clamp(48px,6vw,96px)] text-text leading-[0.9] tracking-tight font-medium italic">
              The <em className="text-accent not-italic font-light">proof</em> is in the offer letter.
            </h2>
          </div>
          <div className="flex items-baseline gap-4">
            <div className="font-serif text-[90px] lg:text-[140px] font-light leading-[0.9] tracking-tighter text-accent italic">
              100<span className="text-[60px] text-text-dim italic">%</span>
            </div>
            <div className="text-[15px] leading-relaxed max-w-[220px] text-text-dim pb-2.5 opacity-60">
              Placement rate across eligible students, with the remaining pursuing higher studies, startups, or civil services.
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-border"
        >
          {PLACEMENT_STATS.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="p-10 lg:p-[40px_30px] border-r border-border last:border-r-0 hover:bg-surface transition-colors group"
            >
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40 mb-3.5 font-bold group-hover:opacity-60 transition-opacity">{stat.label}</div>
              <div className="font-serif text-[56px] font-normal leading-none tracking-tight mb-2 text-text italic group-hover:-translate-y-1 transition-transform duration-300">
                {stat.value}<sup className="text-[20px] text-accent align-super">{stat.sup}</sup>
              </div>
              <div className="text-[13px] text-text-dim opacity-60">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-[90px]"
        >
          <div className="flex justify-between items-center mb-10 pb-5 border-b border-border">
            <h3 className="font-serif text-2xl lg:text-[28px] font-normal tracking-tight text-text">Our <em className="italic text-accent font-light">recruiters.</em></h3>
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent font-bold hover:underline"
            >
              View full list ↗
            </motion.a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[1px] bg-border border border-border">
            {RECRUITERS.map((rec, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02, zIndex: 10, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="bg-bg p-5 text-center flex items-center justify-center min-h-[72px] hover:bg-surface hover:text-accent transition-colors font-serif text-[15px] font-medium tracking-tight text-text-dim cursor-default relative"
              >
                {rec}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
