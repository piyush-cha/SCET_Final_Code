import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  { 
    num: "₹14", sup: " LPA", tag: "Placement", 
    title: "Highest package of the decade.", 
    desc: "Computer Science '25 batch saw seven offers above ₹30 LPA, led by a record ₹42 LPA from a global product firm." 
  },
  { 
    num: "01", sup: " st", tag: "Ranking", feature: true,
    title: "Ranked first in Vidarbha, again.", 
    desc: "For the fourth consecutive year, SCET tops the India Business Review rankings for engineering institutions in the Vidarbha region." 
  },
  { 
    num: "7", sup: "", tag: "Research", 
    title: "Patents filed in a single year.", 
    desc: "Faculty-student teams filed seven Indian patents across renewable energy, embedded systems, and biomaterials." 
  },
  { 
    num: "A+", sup: "", tag: "Accreditation", 
    title: "NAAC A+ in third cycle.", 
    desc: "Reaffirmed with the highest grade  placing SCET among the top 8% of engineering colleges assessed nationally." 
  },
];

export default function Highlights() {
  return (
    <section className="bg-bg text-text py-[100px] lg:py-[120px] px-5 lg:px-10 relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent 70%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1440px] mx-auto mb-[70px] flex flex-col lg:flex-row justify-between lg:items-end gap-10"
      >
        <div className="max-w-[720px]">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-5 font-bold">Highlights · 2025–26</div>
          <h2 className="font-serif text-[clamp(42px,5vw,72px)] leading-none tracking-tight italic font-medium">Milestones that <em className="text-accent not-italic font-light">matter.</em></h2>
        </div>
        <div className="flex gap-2">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-all">
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-all">
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border border-border"
      >
        {HIGHLIGHTS.map((item, i) => (
          <motion.div 
            key={i} 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className={`p-[36px_30px] min-h-[380px] flex flex-col justify-between transition-all duration-300 group ${item.feature ? "bg-accent text-bg hover:shadow-xl hover:-translate-y-1 relative z-10" : "bg-bg hover:bg-surface hover:shadow-lg hover:-translate-y-1 relative z-10"}`}
          >
            <div className="flex items-start justify-between mb-[30px]">
              <div className="font-serif text-[52px] font-normal leading-[0.9] tracking-tight italic group-hover:scale-105 origin-left transition-transform duration-500">
                {item.num}<sup className={`text-[16px] font-mono font-medium align-super ${item.feature ? "text-bg" : "text-accent"}`}>{item.sup}</sup>
              </div>
              <span className={`font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-[4px] font-bold ${item.feature ? "bg-bg/10 text-bg" : "bg-surface-light border border-border text-text-dim"}`}>{item.tag}</span>
            </div>
            <div>
              <h3 className="font-serif text-[22px] leading-tight mb-3 tracking-tight font-medium" dangerouslySetInnerHTML={{ __html: item.title.replace('<br/>', '<br />') }} />
              <p className={`text-[13px] leading-relaxed mb-[18px] ${item.feature ? "opacity-75" : "opacity-60"}`}>{item.desc}</p>
              <a href="#" className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase font-bold transition-all hover:gap-3 ${item.feature ? "text-bg" : "text-accent"}`}>
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
