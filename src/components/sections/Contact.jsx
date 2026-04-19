const CONTACT_INFO = [
  { label: "Address", val: "Nagpur–Katol Road,\nMouza Umred, Tahsil Kalameshwar,\nNagpur · 441 501 · Maharashtra", multi: true },
  { label: "Telephone", val: "+91 712 655 1200 / 1300" },
  { label: "Admissions", val: "admissions@scet.ac.in" },
  { label: "General", val: "hello@scet.ac.in" },
  { label: "Office hours", val: "Mon — Sat · 09:00 to 17:30 IST" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-[100px] lg:py-[140px] px-5 lg:px-10 bg-bg text-text relative overflow-hidden">
      <div className="absolute -bottom-[50%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[60px] lg:gap-20">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-5 font-bold">Get in touch</div>
          <h2 className="font-serif text-[clamp(56px,7vw,110px)] leading-[0.9] tracking-tighter mb-10 font-medium italic">
            Come, <em className="not-italic font-light text-accent">visit us.</em>
          </h2>
          <div className="flex flex-col border-t border-border">
            {CONTACT_INFO.map((row, i) => (
              <div key={i} className="py-[26px] border-b border-border grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-[30px] items-center">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-dim font-bold">{row.label}</div>
                <div className={`font-serif tracking-tight font-medium ${row.multi ? "text-[16px] leading-relaxed opacity-90" : "text-[20px]"}`}>
                  {row.val.split('\n').map((line, j) => (
                    <span key={j} className="block">{line}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-border rounded-[8px] overflow-hidden min-h-[500px] relative flex flex-col group mt-10 lg:mt-0">
          <div className="flex-1 relative overflow-hidden bg-bg">
            <div className="absolute inset-0 bg-bg pointer-events-none" />
            
            {/* Minimal SVG "Map" Visual */}
            <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 400" preserveAspectRatio="none">
              <path d="M 0 280 Q 100 240, 200 260 T 400 230" stroke="#2D2D2D" strokeWidth="1" fill="none"/>
              <path d="M 50 0 Q 80 180, 230 220 T 400 380" stroke="#2D2D2D" strokeWidth="1" fill="none" opacity="0.4"/>
              <path d="M 0 100 L 400 130" stroke="#2D2D2D" strokeWidth="0.5" fill="none" opacity="0.3"/>
            </svg>

            <div className="absolute top-[42%] left-[58%] -translate-x-1/2 -translate-y-[100%] flex flex-col items-center gap-2">
              <div className="bg-bg border border-border px-3 py-1.5 rounded-[4px] font-mono text-[10px] tracking-[0.12em] text-text-dim whitespace-nowrap shadow-xl">SCET CAMPUS</div>
              <div className="w-[18px] h-[18px] bg-accent rounded-full shadow-[0_0_0_6px_rgba(255,255,255,0.1),0_0_0_12px_rgba(255,255,255,0.05)] animate-pulse" />
            </div>
          </div>
          <div className="p-[22px_26px] border-t border-border flex justify-between items-center bg-bg">
            <div className="font-mono text-[11px] tracking-[0.15em] opacity-40 font-bold text-text-dim">21.1458° N · 79.0882° E</div>
            <a href="#" className="text-accent font-mono text-[11px] tracking-[0.18em] uppercase flex items-center gap-2 font-bold hover:underline transition-all group-hover:gap-3">Open in Maps ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
