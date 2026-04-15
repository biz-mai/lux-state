const stats = [
  { num: "12–18%", label: "Avg. Annual Appreciation" },
  { num: "₱42M", label: "Highest Sale This Quarter" },
  { num: "28 Days", label: "Avg. Time to Close" },
  { num: "100%", label: "Transparent, No Hidden Fees" },
];

const InvestorStrip = () => (
  <section className="bg-gold py-9 px-4 md:px-16 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-6">
    {stats.map((s, i) => (
      <div key={i} className="contents">
        <div>
          <div className="font-display text-[2.4rem] font-normal text-obsidian leading-none">{s.num}</div>
          <div className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-obsidian/65 mt-1">{s.label}</div>
        </div>
        {i < stats.length - 1 && <div className="hidden lg:block w-px h-10 bg-obsidian/20" />}
      </div>
    ))}
  </section>
);

export default InvestorStrip;
