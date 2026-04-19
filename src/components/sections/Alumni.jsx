const ALUMNI = [
  { 
    tag: "Featured Alumnus · Batch of 2014", feature: true, initials: "AG", name: "Aarti Ghosh", role: "VP Engineering · Fintech, London",
    quote: "SCET did not just give me a degree. It gave me the habit of asking 'why' even when the answer was inconvenient. I take that habit into every boardroom." 
  },
  { 
    tag: "Entrepreneur", initials: "VP", name: "Vikrant Patil", role: "Founder · Axiom IoT, Pune",
    quote: "I walked out of campus with two friends and a Raspberry Pi. Today we employ 180 engineers." 
  },
  { 
    tag: "Research", initials: "MR", name: "Dr. Meera Rao", role: "Postdoc · ETH Zurich",
    quote: "The lab at SCET was the first place I was allowed to fail without fear. That freedom became a PhD." 
  },
  { 
    tag: "Civil Services", initials: "SK", name: "Sanchit Khare, IAS", role: "Sub-Divisional Magistrate, MP",
    quote: "Engineering taught me systems thinking. Public service is the largest system of all." 
  },
  { 
    tag: "Product", initials: "RN", name: "Rohan Naidu", role: "Staff PM · SaaS, Bengaluru",
    quote: "Everything I learned about shipping came from building Tech Samagam as a sophomore." 
  },
];

export default function Alumni() {
  return (
    <section className="py-[100px] lg:py-[140px] px-5 lg:px-10 bg-bg">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-[70px] pb-[30px] border-b border-border gap-8">
          <h2 className="font-serif text-[clamp(42px,5.5vw,72px)] text-text leading-[1.1] tracking-tight max-w-[700px] font-medium italic">
            The <em className="text-burgundy not-italic font-light">ones who left,</em><br className="hidden lg:block" /> the ones we carry forward.
          </h2>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-burgundy font-bold">Alumni · 18,000+</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALUMNI.map((alum, i) => (
            <div key={i} className={`group border rounded-[8px] p-9 flex flex-col transition-all hover:-translate-y-1 ${
              alum.feature ? "row-span-2 bg-accent text-bg border-accent p-11 min-h-[520px]" : "bg-surface border-border hover:bg-surface-light"
            }`}>
              <div className={`font-mono text-[10px] tracking-[0.22em] uppercase mb-6 font-bold ${alum.feature ? "text-bg/60" : "text-accent"}`}>
                {alum.tag}
              </div>
              <div className={`font-serif mb-auto tracking-tight ${
                alum.feature ? "text-3xl leading-tight italic font-light opacity-85" : "text-xl leading-relaxed text-text font-medium italic"
              }`}>
                "{alum.quote}"
              </div>
              <div className={`flex items-center gap-4 mt-7 pt-5 border-t ${alum.feature ? "border-bg/10" : "border-border"}`}>
                <div className={`rounded-full flex items-center justify-center font-serif text-lg font-bold border ${
                  alum.feature ? "w-14 h-14 text-[22px] bg-bg text-accent border-bg/10" : "w-12 h-12 bg-bg text-accent border-border"
                }`}>
                  {alum.initials}
                </div>
                <div>
                  <div className={`font-serif font-bold not-italic ${alum.feature ? "text-lg text-bg" : "text-[16px] text-text"}`}>{alum.name}</div>
                  <div className={`font-mono text-[10px] tracking-widest mt-0.5 font-bold ${alum.feature ? "text-bg/60" : "text-text-dim opacity-40"}`}>{alum.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
