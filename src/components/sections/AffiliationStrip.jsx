const AFFILIATIONS = [
  { badge: "A+", name: "NAAC", sub: "Grade · Cycle III", accent: true },
  { badge: "NBA", name: "Accredited", sub: "UG Programs" },
  { badge: "IBR", name: "Top 25", sub: "Central India" },
  { badge: "AICTE", name: "Approved", sub: "All India Council", gold: true },
  { badge: "DTE", name: "Maharashtra", sub: "Directorate" },
  { badge: "R•N", name: "RTMNU", sub: "Affiliated" },
  { badge: "M•B", name: "MSBTE", sub: "Polytechnic" },
];

export default function AffiliationStrip() {
  return (
    <section className="bg-surface px-5 lg:px-10 py-11 border-t-2 border-accent border-b border-border">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-[60px] items-center">
        <div className="font-serif text-xl leading-snug text-text font-medium italic">
          Recognised <em className="text-accent not-italic">&amp;</em> approved by the nation's foremost academic bodies.
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
          {AFFILIATIONS.map((item, i) => (
            <div key={i} className="py-[14px] px-2 border-l border-border text-center flex flex-col items-center gap-2 first:border-l-0">
              <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center font-serif text-[13px] font-semibold tracking-tighter ${
                item.accent ? "bg-accent text-bg" : 
                item.gold ? "bg-surface-light text-text border border-border" : 
                "bg-bg text-text-dim"
              }`}>
                {item.badge}
              </div>
              <div className="font-mono text-[10px] tracking-widest uppercase font-medium">{item.name}</div>
              <div className="text-[9px] opacity-40 tracking-wider uppercase font-medium">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
