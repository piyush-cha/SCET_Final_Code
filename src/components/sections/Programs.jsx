import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROGRAMS = [
  { id: "01 / 04", title: "Bachelor of <span class='italic text-accent font-light'>Technology</span>", duration: "4 Years", intake: "480 Seats", desc: "Eight streams across CSE, IT, AI&DS, Mechanical, Civil, Electrical, ECE and Biotech  affiliated to RTMNU, approved by AICTE, with NBA accreditation on core branches." },
  { id: "02 / 04", title: "Master of <span class='italic text-accent font-light'>Business Admin.</span>", duration: "2 Years", intake: "120 Seats", desc: "Dual-specialisation MBA with tracks in Marketing, Finance, Operations, HR and Business Analytics  with integrated internships at leading corporates." },
  { id: "03 / 04", title: "Master of <span class='italic text-accent font-light'>Computer App.</span>", duration: "2 Years", intake: "60 Seats", desc: "Industry-aligned MCA with electives in Cloud Engineering, Data Science, Cybersecurity and Full-stack Development  taught by professors and industry experts." },
  { id: "04 / 04", title: "Diploma · <span class='italic text-accent font-light'>Polytechnic</span>", duration: "3 Years", intake: "240 Seats", desc: "Six-branch polytechnic diploma under MSBTE  the fastest route from Class X to a hands-on engineering career, with direct lateral entry into our B.Tech program." },
];

export default function Programs() {
  return (
    <section id="programs" className="py-[100px] lg:py-[130px] px-5 lg:px-10 bg-surface-light border-b border-border">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1440px] mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end"
      >
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-5 font-bold">Academic Programs · 2026</div>
          <h2 className="font-serif text-[clamp(48px,5.5vw,84px)] leading-none tracking-tight text-text italic">Four paths, <em className="text-accent not-italic font-light">one promise.</em></h2>
        </div>
        <p className="text-[17px] leading-relaxed text-text-dim max-w-[440px] opacity-80">
          Whether you are a school-leaver, a working professional, or a researcher  SCET offers a program calibrated to your ambition, with syllabi revised annually in consultation with industry.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="max-w-[1440px] mx-auto border-t border-border flex flex-col"
      >
        {PROGRAMS.map((prog, i) => (
          <motion.a 
            key={i} 
            href="#" 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
            className="group grid grid-cols-1 md:grid-cols-[80px_1.2fr_1fr_1fr_140px] gap-6 lg:gap-10 py-9 border-b border-border items-center hover:bg-surface hover:-translate-y-1 transition-all hover:shadow-lg relative z-10"
          >
            <div className="font-mono text-[12px] tracking-[0.15em] text-accent sm:pl-5 font-bold">{prog.id}</div>
            <div className="font-serif text-[38px] leading-none tracking-tight text-text group-hover:text-accent transition-colors duration-300" dangerouslySetInnerHTML={{ __html: prog.title }} />
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-40 font-bold">Duration · Intake</span>
              <span className="text-[15px] font-bold text-text-dim">{prog.duration} · {prog.intake}</span>
            </div>
            <div className="hidden lg:block text-[14px] leading-relaxed text-text-dim opacity-70 group-hover:opacity-100 transition-opacity pr-4">{prog.desc}</div>
            <div className="hidden md:flex justify-end sm:pr-5">
              <div className="w-12 h-12 rounded-full border border-transparent group-hover:border-accent flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-8 h-8 text-accent transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
