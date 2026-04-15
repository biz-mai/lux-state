const features = [
  { title: "Senior Broker Assigned to You", desc: "Every client is managed directly by a senior, PRC-licensed broker — not passed to a junior or call center.", icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></> },
  { title: "Data-Driven Investment Advice", desc: "We analyze rental yields, appreciation trends, and neighborhood data before making any recommendation.", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /> },
  { title: "Zero Hidden Fees. Ever.", desc: "Clear pricing, honest advice, and full disclosure at every step. What we tell you is exactly what you get.", icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></> },
  { title: "Award-Winning Track Record", desc: "Ranked #1 in Metro Manila 2024. 4.9-star rating across 850+ verified client reviews.", icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /> },
];

const WhySection = () => (
  <section id="why" className="py-28 px-4 md:px-16 bg-obsidian relative overflow-hidden">
    <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(184,150,90,0.07) 0%, transparent 65%)" }} />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Why LuxEstate</span>
        <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] text-white">
          We Don't Just<br />Find Properties —<br /><em className="italic">We Find Returns.</em>
        </h2>
        <p className="text-silver text-[0.95rem] leading-[1.85] my-5 mb-8">Most agents show you listings. We show you opportunity. Every recommendation we make is backed by market data, legal due diligence, and a genuine alignment with your financial goals.</p>
        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-block text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-obsidian bg-gold px-10 py-4 border-none cursor-pointer hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(184,150,90,0.4)] transition-all">
          Talk to an Expert Today
        </a>
      </div>
      <div className="flex flex-col gap-5">
        {features.map((f, i) => (
          <div key={i} className="flex gap-5 items-start p-5 border border-gold/15 hover:border-gold/40 hover:bg-gold/[0.05] transition-all" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="w-9 h-9 flex-shrink-0 bg-gold/10 border border-gold/30 flex items-center justify-center">
              <svg className="w-4 h-4 stroke-gold fill-none" strokeWidth={1.5} viewBox="0 0 24 24">{f.icon}</svg>
            </div>
            <div>
              <h4 className="text-[0.9rem] font-semibold text-white mb-1">{f.title}</h4>
              <p className="text-[0.82rem] text-silver leading-[1.7]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
