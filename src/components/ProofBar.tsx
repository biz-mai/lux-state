const items = [
  { icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />, text: <>Ranked <strong className="text-gold-light font-semibold">#1 Luxury Broker</strong> in Metro Manila 2024</> },
  { icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>, text: <><strong className="text-gold-light font-semibold">850+ investors</strong> trust us with their portfolios</> },
  { icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, text: <>Average sale closed in <strong className="text-gold-light font-semibold">under 30 days</strong></> },
  { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, text: <><strong className="text-gold-light font-semibold">22 PRC-licensed</strong> brokers on your side</> },
];

const ProofBar = () => (
  <div id="proof-bar" className="bg-charcoal border-b border-gold/15 py-4 px-4 md:px-16 flex items-center justify-center gap-4 md:gap-12 flex-wrap">
    {items.map((item, i) => (
      <div key={i} className="contents">
        <div className="flex items-center gap-2.5 text-[0.78rem] text-silver tracking-[0.06em]">
          <svg className="w-[15px] h-[15px] stroke-gold fill-none" strokeWidth={1.8} viewBox="0 0 24 24">{item.icon}</svg>
          <span>{item.text}</span>
        </div>
        {i < items.length - 1 && <div className="hidden md:block w-px h-4 bg-gold/20" />}
      </div>
    ))}
  </div>
);

export default ProofBar;
