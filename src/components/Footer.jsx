import { Instagram, Linkedin, Youtube, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg text-text border-t border-border px-5 lg:px-10 pt-[80px] pb-[30px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] gap-10 lg:gap-[60px] pb-[60px] border-b border-border">
        <div className="flex flex-col">
          <a href="#" className="flex items-center gap-[14px] mb-[20px]">
            <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="25" stroke="currentColor" strokeWidth="1" className="text-accent" />
              <path d="M8 34 Q26 10 44 34" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent" />
              <circle cx="26" cy="22" r="7" fill="currentColor" className="text-accent" />
              <path d="M26 13 L26 6 M26 31 L26 38 M35 22 L42 22 M10 22 L17 22" stroke="currentColor" strokeWidth="1" className="text-accent" />
            </svg>
            <div className="flex flex-col leading-[1.05]">
              <span className="font-serif text-lg font-bold tracking-tight uppercase">Suryodaya</span>
              <span className="font-mono text-[9px] tracking-[0.28em] text-text-dim mt-[3px] font-bold">CET · EST. 2002</span>
            </div>
          </a>
          <div className="font-serif italic text-[17px] leading-relaxed opacity-60 max-w-[280px] mb-7">
            A place where the sun rises on curious minds, and never quite sets.
          </div>
          <div className="flex gap-2.5">
            {[Instagram, Linkedin, Youtube, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-[22px] font-bold">Explore</h4>
          <ul className="flex flex-col gap-3">
            {["About SCET", "Academic Programs", "Departments", "Placements", "Research"].map((link) => (
              <li key={link}><a href="#" className="text-[14px] opacity-60 hover:opacity-100 hover:text-accent transition-all font-medium">{link}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-[22px] font-bold">Students</h4>
          <ul className="flex flex-col gap-3">
            {["Student Portal", "Examination Cell", "Library", "Anti-Ragging", "Grievance Cell"].map((link) => (
              <li key={link}><a href="#" className="text-[14px] opacity-60 hover:opacity-100 hover:text-accent transition-all font-medium">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-[22px] font-bold">Admissions</h4>
          <ul className="flex flex-col gap-3">
            {["Apply Online", "Fee Structure", "Scholarships", "Hostel & Transport", "Brochure"].map((link) => (
              <li key={link}><a href="#" className="text-[14px] opacity-60 hover:opacity-100 hover:text-accent transition-all font-medium">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-[22px] font-bold">Connect</h4>
          <ul className="flex flex-col gap-3 text-[14px] opacity-60 font-medium">
            <li>Nagpur–Katol Road,<br />Nagpur 441 501</li>
            <li><a href="mailto:hello@scet.ac.in" className="hover:text-accent transition-all">hello@scet.ac.in</a></li>
            <li><a href="tel:+917126551200" className="hover:text-accent transition-all">+91 712 655 1200</a></li>
            <li><a href="#" className="hover:text-accent transition-all">Careers at SCET</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-7 flex flex-col md:flex-row justify-between items-center gap-5 font-mono text-[11px] tracking-[0.15em] uppercase text-text/30 font-bold">
        <div>© 2026 Suryodaya College of Engineering & Technology</div>
        <div className="flex gap-5">
          {["Privacy", "Terms", "Sitemap", "RTI"].map((link) => (
            <a key={link} href="#" className="hover:text-text transition-colors">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
