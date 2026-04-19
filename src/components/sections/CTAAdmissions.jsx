import { ArrowRight } from "lucide-react";

export default function CTAAdmissions() {
  return (
    <section id="admissions" className="py-[100px] lg:py-[140px] px-5 lg:px-10 bg-accent text-bg relative overflow-hidden">
      <div className="absolute -top-[40%] -right-[10%] w-[60%] h-[180%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.1),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[60px] lg:gap-[100px] items-center">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-burgundy mb-5 font-bold">Admissions 2026–27</div>
          <h2 className="font-serif text-[clamp(56px,7vw,110px)] leading-[0.9] tracking-tighter mb-[30px] font-medium italic">
            Begin your <em className="not-italic font-light text-burgundy">sunrise.</em>
          </h2>
          <p className="text-[18px] leading-relaxed max-w-[460px] mb-10 text-bg opacity-70 font-medium">Applications are open for all undergraduate, postgraduate and diploma programs. Merit-based scholarships cover up to 100% of tuition for eligible candidates.</p>
          <div className="flex flex-wrap gap-[14px] items-center">
            <a href="#" className="bg-bg text-text px-7 py-3.5 text-[14px] font-bold tracking-wide rounded-[4px] inline-flex items-center gap-2.5 hover:bg-surface-light transition-colors">Start Application <ArrowRight className="w-4 h-4" /></a>
            <a href="#" className="text-bg px-6 py-3.5 text-[14px] font-bold border-2 border-bg rounded-[4px] hover:bg-bg hover:text-accent transition-all uppercase">Download Brochure</a>
            <a href="#" className="text-bg px-6 py-3.5 text-[14px] font-bold border-2 border-bg rounded-[4px] hover:bg-bg hover:text-accent transition-all uppercase">Fee Structure</a>
          </div>
        </div>

        <div className="bg-bg p-10 border border-border rounded-[8px] shadow-[20px_20px_40px_rgba(0,0,0,0.3)]">
          <h3 className="font-serif text-[26px] leading-[1.1] tracking-tight mb-2 font-medium text-text italic">Admission Inquiry</h3>
          <p className="text-[13px] text-text-dim opacity-50 mb-[28px]">Tell us who you are. A counsellor will be in touch within 24 hours.</p>
          
          <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-40 font-bold text-text-dim">First name</label>
                <input type="text" placeholder="Aarav" className="bg-transparent border-b border-border py-2.5 text-[14px] text-text outline-none focus:border-accent transition-colors placeholder:opacity-20" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-40 font-bold text-text-dim">Last name</label>
                <input type="text" placeholder="Sharma" className="bg-transparent border-b border-border py-2.5 text-[14px] text-text outline-none focus:border-accent transition-colors placeholder:opacity-20" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-40 font-bold text-text-dim">Email</label>
                <input type="email" placeholder="you@example.com" className="bg-transparent border-b border-border py-2.5 text-[14px] text-text outline-none focus:border-accent transition-colors placeholder:opacity-20" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-40 font-bold text-text-dim">Phone</label>
                <input type="tel" placeholder="+91 98765 43210" className="bg-transparent border-b border-border py-2.5 text-[14px] text-text outline-none focus:border-accent transition-colors placeholder:opacity-20" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-40 font-bold text-text-dim">Program of interest</label>
              <select className="bg-bg border-b border-border py-2.5 text-[14px] text-text outline-none focus:border-accent appearance-none transition-colors">
                <option className="bg-surface">B.Tech · Computer Science</option>
                <option className="bg-surface">B.Tech · AI & Data Science</option>
                <option className="bg-surface">B.Tech · Mechanical</option>
                <option className="bg-surface">MBA · Dual Specialisation</option>
                <option className="bg-surface">MCA</option>
                <option className="bg-surface">Diploma · Polytechnic</option>
              </select>
            </div>
            <button className="w-full bg-accent text-bg py-3.5 text-[14px] font-bold tracking-wide rounded-[4px] mt-2.5 hover:bg-bg hover:text-accent border border-accent transition-colors uppercase">Submit Inquiry →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
