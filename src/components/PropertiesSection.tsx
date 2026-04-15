import { useEffect, useRef } from "react";

interface Props {
  onOpenModal: () => void;
}

const properties = [
  {
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&auto=format&fit=crop",
    badge: "Featured", badgeNew: true, roi: "Est. ROI 16%/yr",
    price: "₱42,000,000", name: "The Pinnacle Penthouse", location: "BGC, Taguig City",
    specs: ["4 Beds", "3 Baths", "320 sqm"], featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop",
    badge: "For Sale", roi: "Est. ROI 13%/yr",
    price: "₱18,500,000", name: "Acacia Park Residence", location: "Alabang, Muntinlupa",
    specs: ["3 Beds", "2 Baths", "180 sqm"],
  },
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop",
    badge: "Investment", roi: "Est. ROI 18%/yr",
    price: "₱9,800,000", name: "Vega Tower Suite 21B", location: "Makati CBD",
    specs: ["2 Beds", "1 Bath", "72 sqm"],
  },
];

const PropertiesSection = ({ onOpenModal }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="properties" className="py-28 px-4 md:px-16 bg-off-white" ref={ref}>
      <div className="flex items-end justify-between mb-14">
        <div>
          <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">High-Yield Listings</span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.1] text-obsidian">Featured<br />Investment Properties</h2>
        </div>
        <button className="hidden md:inline-block text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-gold bg-transparent px-9 py-[0.95rem] border border-gold cursor-pointer hover:bg-gold hover:text-obsidian hover:-translate-y-0.5 transition-all">
          View All Listings
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p, i) => (
          <div key={i} className={`fade-up bg-white overflow-hidden cursor-pointer relative hover:-translate-y-1.5 hover:shadow-[0_22px_52px_rgba(0,0,0,0.14)] transition-all duration-[350ms] ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
            <div className="relative overflow-hidden" style={{ height: i === 0 ? "380px" : "240px" }}>
              <img src={p.img} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[600ms]" />
              <span className={`absolute top-4 left-4 text-[0.65rem] font-semibold tracking-[0.16em] uppercase py-1.5 px-3 ${p.badgeNew ? "bg-obsidian text-gold border border-gold" : "bg-gold text-obsidian"}`}>
                {p.badge}
              </span>
              <span className="absolute top-4 right-4 text-[0.65rem] font-semibold tracking-[0.1em] uppercase py-1 px-3 text-gold border border-gold/40" style={{ background: "rgba(13,13,13,0.88)", backdropFilter: "blur(8px)" }}>
                {p.roi}
              </span>
            </div>
            <div className="p-5 pb-6">
              <div className={`font-display font-normal text-obsidian mb-1 ${i === 0 ? "text-[1.9rem]" : "text-[1.45rem]"}`}>{p.price}</div>
              <div className="text-[0.88rem] font-medium text-charcoal mb-0.5">{p.name}</div>
              <div className="text-[0.78rem] text-mid mb-4 flex items-center gap-1.5">
                <svg className="w-3 h-3 stroke-gold fill-none" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {p.location}
              </div>
              <div className="flex gap-5 pt-3 border-t border-obsidian/[0.07] mb-4">
                {p.specs.map((s) => (
                  <span key={s} className="text-[0.75rem] text-mid flex items-center gap-1">{s}</span>
                ))}
              </div>
              <button onClick={onOpenModal} className="w-full py-3 border-none cursor-pointer bg-obsidian text-gold font-body text-[0.72rem] font-semibold tracking-[0.14em] uppercase hover:bg-gold hover:text-obsidian transition-colors">
                Inquire About This Property
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertiesSection;
