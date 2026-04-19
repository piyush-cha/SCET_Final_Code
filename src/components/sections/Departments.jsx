import { motion } from "motion/react";
import { Code, Cpu, Settings, Triangle, Zap, Box } from "lucide-react";

const DEPTS = [
  { code: "DEPT · CSE", icon: <Code className="w-5 h-5"/>, name: "Computer Engineering", faculty: "28", intake: "120", nba: "A+" },
  { code: "DEPT · AI&DS", icon: <Cpu className="w-5 h-5"/>, name: "Artificial Intelligence & Data Science", faculty: "14", intake: "60", nba: "'22" },
  { code: "DEPT · ECE", icon: <Zap className="w-5 h-5"/>, name: "Electronics & Telecommunication", faculty: "22", intake: "60", nba: "A" },
  { code: "DEPT · MECH", icon: <Settings className="w-5 h-5"/>, name: "Mechanical Engineering", faculty: "26", intake: "60", nba: "A" },
  { code: "DEPT · CIVIL", icon: <Triangle className="w-5 h-5"/>, name: "Civil Engineering", faculty: "19", intake: "60", nba: "A" },
  { code: "DEPT · EE", icon: <Box className="w-5 h-5"/>, name: "Electrical Engineering", faculty: "17", intake: "60", nba: "B+" },
];


export default function Departments() {
  return (
    <section id="departments" className="py-[100px] lg:py-[130px] px-5 lg:px-10 bg-bg">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1440px] mx-auto mb-[50px]"
      >
        <div className="max-w-[720px]">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent font-bold mb-4">Departments · 11 Disciplines</div>
          <h2 className="font-serif text-[clamp(42px,5vw,72px)] leading-none tracking-tight text-text italic">Eleven homes for <em className="text-accent not-italic font-light">one curious mind.</em></h2>
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
        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {DEPTS.map((dept, i) => (
          <motion.div 
            key={i} 
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
            }}
            className="group border border-border rounded-[8px] p-[36px_30px] bg-surface relative overflow-hidden transition-all duration-300 hover:bg-surface-light hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
            <div className="flex justify-between items-start mb-[30px]">
              <div className="font-mono text-[11px] tracking-[0.18em] text-text-dim group-hover:text-accent font-bold transition-colors">{dept.code}</div>
              <div className="w-11 h-11 flex items-center justify-center text-accent border border-border rounded-full group-hover:bg-accent group-hover:text-bg transition-all duration-500 rotate-0 group-hover:rotate-12">
                {dept.icon}
              </div>
            </div>
            <div className="font-serif text-[26px] leading-[1.15] tracking-tight mb-3.5 flex-grow font-medium text-text italic group-hover:translate-x-1 transition-transform">{dept.name}</div>
            <div className="flex gap-4 pt-5 border-t border-border transition-colors">
              <div className="flex flex-col">
                <span className="font-serif text-[22px] font-bold tracking-tighter text-accent">{dept.faculty}</span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-40 font-bold">Faculty</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[22px] font-bold tracking-tighter text-accent">{dept.intake}</span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-40 font-bold">Intake</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[22px] font-bold tracking-tighter text-accent">{dept.nba}</span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-40 font-bold">NBA</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
