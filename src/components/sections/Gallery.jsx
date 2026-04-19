const TILES = [
  { id: 1, cat: "Event · 2025", title: "Annual Convocation", wide: true, color: "from-surface to-surface-light" },
  { id: 2, cat: "Facility", title: "Central Library", color: "from-surface-light to-surface" },
  { id: 3, cat: "Student Life", title: "Tech Samagam Fest", tall: true, color: "from-surface to-border" },
  { id: 4, cat: "Research", title: "Robotics Lab", color: "from-surface to-surface-light" },
  { id: 5, cat: "Sports", title: "Inter-College Meet", color: "from-surface-light to-border" },
  { id: 6, cat: "Campus", title: "Morning at the quad", color: "from-border to-surface" },
];

export default function Gallery() {
  return (
    <section className="py-[100px] lg:py-[130px] px-5 lg:px-10 bg-bg overflow-hidden border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-end">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-5 font-bold">Gallery · Campus Life</div>
            <h2 className="font-serif text-[clamp(42px,5vw,72px)] text-text leading-tight tracking-tight font-medium italic">A place, in <em className="text-accent not-italic font-light">pictures.</em></h2>
          </div>
          <p className="text-[16px] leading-[1.6] text-text-dim opacity-60 max-w-[500px]">
            Seventeen acres, eleven departments, and a thousand afternoons in between. A glimpse into life at Suryodaya — from convocation stages to chai-stained lab notebooks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {TILES.map((tile) => (
            <div 
              key={tile.id}
              className={`group relative overflow-hidden rounded-[8px] bg-surface flex items-end p-5 lg:p-[22px] min-h-[220px] transition-transform hover:scale-[0.98] border border-border ${
                tile.wide ? "lg:col-span-2" : ""
              } ${
                tile.tall ? "lg:row-span-2 min-h-[460px]" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br transition-opacity opacity-20 ${tile.color}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent mb-1.5 font-bold">{tile.cat}</div>
                <div className="font-serif text-[18px] font-medium leading-tight text-text tracking-tight uppercase italic">{tile.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
