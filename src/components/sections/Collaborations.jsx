const COLLABS = [
  { id: "01", category: "Simulation", name: "Dassault", em: "Systèmes" },
  { id: "02", category: "Engineering", name: "Ansys", em: "Education" },
  { id: "03", category: "AR · VR", name: "Elixir", em: "Labs" },
  { id: "04", category: "Incubation", name: "STBIF", em: "Pune" },
  { id: "05", category: "Manufacturing", name: "IJMA", em: "India" },
  { id: "06", category: "Steel", name: "SAIL", em: "Rourkela" },
  { id: "07", category: "Energy", name: "NTPC", em: "Limited" },
  { id: "08", category: "Design", name: "Mastercam", em: "India" },
  { id: "09", category: "Mobility", name: "Bajaj", em: "Auto R&D" },
];

export default function Collaborations() {
  return (
    <section className="py-[100px] lg:py-[140px] px-5 lg:px-10 bg-bg text-text relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-[100px] items-start">
        <div className="lg:sticky lg:top-[120px]">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-gold mb-5 font-bold">Industry · Collaborations</div>
          <h2 className="font-serif text-[clamp(42px,4.8vw,68px)] leading-none tracking-tight mb-[30px] font-medium italic">Built together, <em className="text-gold not-italic font-light">with the people who build the world.</em></h2>
          <p className="text-[16px] leading-relaxed opacity-60 max-w-[420px] mb-[30px]">From steel plants to software foundries, our students learn inside the institutions that power India's industrial spine. Each partnership brings curriculum, live projects, and guaranteed internship pipelines.</p>
          <a href="#" className="inline-flex px-8 py-3.5 text-[14px] font-bold border border-gold text-gold hover:bg-gold hover:text-bg transition-all rounded-[4px]">All partners →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border">
          {COLLABS.map((coll, i) => (
            <div key={i} className="bg-bg p-8 aspect-square flex flex-col justify-between transition-colors hover:bg-surface">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-40 font-bold">{coll.id} · {coll.category}</div>
              <div className="font-serif text-xl leading-none tracking-tight font-medium italic text-text uppercase">
                {coll.name} <em className="text-gold not-italic text-[14px] block mt-1 opacity-60 font-mono tracking-wider font-bold">{coll.em}</em>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
