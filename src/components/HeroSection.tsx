interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const scrollDown = () => {
    document.getElementById("proof-bar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-obsidian overflow-hidden pt-[110px]">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(110deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.5) 55%, rgba(13,13,13,0.78) 100%), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&auto=format&fit=crop') center/cover no-repeat`,
        }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 72% 48%, rgba(184,150,90,0.1) 0%, transparent 60%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-[2] px-6 md:px-16 pt-12 max-w-[820px] animate-hero">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-gold mb-5">
          <svg className="w-3 h-3 stroke-gold fill-none" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          PRC-Licensed · HLURB Accredited · 15 Years of Excellence
        </div>

        <div className="flex items-center gap-4 text-[0.73rem] font-medium tracking-[0.22em] uppercase text-gold mb-6">
          <span className="block w-8 h-px bg-gold" />
          Premium Real Estate & Investment
        </div>

        <h1 className="font-display text-[clamp(3.2rem,7.5vw,6rem)] font-light leading-[1.02] text-white mb-6">
          Stop Renting.<br />
          Start <em className="italic text-gold-light">Building</em><br />
          Real Wealth.
        </h1>

        <p className="text-[1.05rem] font-light text-silver max-w-[540px] mb-3 leading-[1.75]">
          Metro Manila's most trusted property advisors connect you with pre-selling and resale investments that deliver measurable returns — not just square meters.
        </p>

        <div className="flex items-center gap-2 text-[0.82rem] text-gold-light mb-10 italic font-display">
          <span className="block w-5 h-px bg-gold" />
          Properties we sell appreciate an average of 12–18% annually.
        </div>

        <div className="flex gap-5 flex-wrap items-center mb-5">
          <button onClick={onOpenModal} className="inline-block text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-obsidian bg-gold px-10 py-4 border-none cursor-pointer hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(184,150,90,0.4)] transition-all">
            Get My Free Investment Plan
          </button>
          <a href="#properties" onClick={(e) => { e.preventDefault(); document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-block text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-gold bg-transparent px-9 py-[0.95rem] border border-gold cursor-pointer hover:bg-gold hover:text-obsidian hover:-translate-y-0.5 transition-all">
            Browse Listings
          </a>
        </div>

        <div className="text-[0.72rem] text-white/40 tracking-[0.06em] flex items-center gap-1.5">
          <svg className="w-3 h-3 stroke-white/50 fill-none" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          No commitment required. Typically respond in under 2 hours.
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollDown} className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 text-silver text-[0.68rem] tracking-[0.18em] uppercase animate-scroll-bob cursor-pointer bg-transparent border-none">
        <svg className="w-5 h-5 stroke-gold fill-none" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
        Scroll
      </button>

      {/* Stats */}
      <div className="absolute bottom-0 right-0 z-[2] hidden md:flex" style={{ background: "rgba(13,13,13,0.75)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(184,150,90,0.22)", borderLeft: "1px solid rgba(184,150,90,0.22)" }}>
        {[
          { num: "₱2.4B+", label: "Closed Transactions" },
          { num: "850+", label: "Investor Clients" },
          { num: "4.9★", label: "Client Rating" },
        ].map((s, i) => (
          <div key={i} className="px-10 py-5 border-r border-gold/15 last:border-r-0">
            <div className="font-display text-[2rem] font-normal text-gold leading-none">{s.num}</div>
            <div className="text-[0.66rem] font-medium tracking-[0.14em] uppercase text-silver mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
