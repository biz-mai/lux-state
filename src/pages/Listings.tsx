import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConsultModal from "@/components/ConsultModal";

const ALL_PROPERTIES = [
  {
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&auto=format&fit=crop",
    badge: "Featured", badgeStyle: "bg-obsidian text-gold border border-gold",
    roi: "Est. ROI 16%/yr", price: "₱42,000,000", name: "The Pinnacle Penthouse",
    location: "BGC, Taguig City", specs: ["4 Beds", "3 Baths", "320 sqm"],
    type: "Pre-Selling", status: "Featured",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop",
    badge: "For Sale", badgeStyle: "bg-gold text-obsidian",
    roi: "Est. ROI 13%/yr", price: "₱18,500,000", name: "Acacia Park Residence",
    location: "Alabang, Muntinlupa", specs: ["3 Beds", "2 Baths", "180 sqm"],
    type: "House & Lot", status: "For Sale",
  },
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop",
    badge: "Investment", badgeStyle: "bg-gold text-obsidian",
    roi: "Est. ROI 18%/yr", price: "₱9,800,000", name: "Vega Tower Suite 21B",
    location: "Makati CBD", specs: ["2 Beds", "1 Bath", "72 sqm"],
    type: "Condo", status: "Investment",
  },
  {
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop",
    badge: "Pre-Selling", badgeStyle: "bg-gold text-obsidian",
    roi: "Est. ROI 20%/yr", price: "₱6,200,000", name: "Skyline Residences Unit 8C",
    location: "Pasig City", specs: ["1 Bed", "1 Bath", "42 sqm"],
    type: "Condo", status: "Pre-Selling",
  },
  {
    img: "https://images.unsplash.com/photo-1582407947304-fd86f28f6782?w=600&auto=format&fit=crop",
    badge: "For Sale", badgeStyle: "bg-gold text-obsidian",
    roi: "Est. ROI 11%/yr", price: "₱28,000,000", name: "Verdana Hills Estate",
    location: "Antipolo, Rizal", specs: ["5 Beds", "4 Baths", "450 sqm"],
    type: "House & Lot", status: "For Sale",
  },
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop",
    badge: "Investment", badgeStyle: "bg-gold text-obsidian",
    roi: "Est. ROI 15%/yr", price: "₱12,400,000", name: "One Pacific Place Studio",
    location: "Ortigas Center, Pasig", specs: ["Studio", "1 Bath", "38 sqm"],
    type: "Condo", status: "Investment",
  },
  {
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop",
    badge: "Pre-Selling", badgeStyle: "bg-gold text-obsidian",
    roi: "Est. ROI 22%/yr", price: "₱4,800,000", name: "Harbor View Tower 3",
    location: "Manila Bay, Parañaque", specs: ["1 Bed", "1 Bath", "36 sqm"],
    type: "Condo", status: "Pre-Selling",
  },
  {
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop",
    badge: "For Sale", badgeStyle: "bg-gold text-obsidian",
    roi: "Est. ROI 14%/yr", price: "₱35,000,000", name: "Forbes Enclave Villa",
    location: "Forbes Park, Makati", specs: ["5 Beds", "5 Baths", "600 sqm"],
    type: "House & Lot", status: "For Sale",
  },
  {
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop",
    badge: "Investment", badgeStyle: "bg-gold text-obsidian",
    roi: "Est. ROI 17%/yr", price: "₱7,500,000", name: "The Residences at Green Park",
    location: "Quezon City", specs: ["2 Beds", "1 Bath", "58 sqm"],
    type: "Condo", status: "Investment",
  },
];

const TYPES = ["All", "Condo", "House & Lot", "Pre-Selling"];
const BUDGETS = ["All", "Under ₱10M", "₱10M – ₱20M", "₱20M – ₱40M", "₱40M+"];

function parseBudget(price: string) {
  return parseInt(price.replace(/[₱,]/g, ""));
}

export default function Listings() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState("All");
  const [budgetFilter, setBudgetFilter] = useState("All");

  const filtered = ALL_PROPERTIES.filter((p) => {
    const val = parseBudget(p.price);
    const typeOk = typeFilter === "All" || p.type === typeFilter;
    const budgetOk =
      budgetFilter === "All" ||
      (budgetFilter === "Under ₱10M" && val < 10_000_000) ||
      (budgetFilter === "₱10M – ₱20M" && val >= 10_000_000 && val < 20_000_000) ||
      (budgetFilter === "₱20M – ₱40M" && val >= 20_000_000 && val < 40_000_000) ||
      (budgetFilter === "₱40M+" && val >= 40_000_000);
    return typeOk && budgetOk;
  });

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <div className="bg-obsidian pt-32 pb-16 px-4 md:px-16">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gold text-[0.75rem] tracking-[0.14em] uppercase font-semibold mb-8 bg-transparent border-none cursor-pointer hover:text-gold-light transition-colors"
        >
          <svg className="w-4 h-4 stroke-current fill-none" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </button>
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">
          High-Yield Listings
        </span>
        <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-white">
          All Investment<br />Properties
        </h1>
        <p className="text-silver text-[0.95rem] mt-4 max-w-[500px] leading-[1.8]">
          Browse our full portfolio of pre-selling condos, resale properties, and high-yield investment units across Metro Manila.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-obsidian/10 px-4 md:px-16 py-5 flex flex-wrap gap-6 items-center sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-mid">Type:</span>
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 border transition-all cursor-pointer ${
                typeFilter === t
                  ? "bg-gold text-obsidian border-gold"
                  : "bg-transparent text-mid border-obsidian/20 hover:border-gold hover:text-gold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-mid">Budget:</span>
          {BUDGETS.map((b) => (
            <button
              key={b}
              onClick={() => setBudgetFilter(b)}
              className={`text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 border transition-all cursor-pointer ${
                budgetFilter === b
                  ? "bg-gold text-obsidian border-gold"
                  : "bg-transparent text-mid border-obsidian/20 hover:border-gold hover:text-gold"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
        <span className="ml-auto text-[0.78rem] text-mid">{filtered.length} properties found</span>
      </div>

      {/* Grid */}
      <div className="px-4 md:px-16 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-mid">No properties match your filters.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="bg-white overflow-hidden cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_22px_52px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="relative overflow-hidden h-[240px]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-4 left-4 text-[0.65rem] font-semibold tracking-[0.16em] uppercase py-1.5 px-3 ${p.badgeStyle}`}>
                    {p.badge}
                  </span>
                  <span className="absolute top-4 right-4 text-[0.65rem] font-semibold tracking-[0.1em] uppercase py-1 px-3 text-gold border border-gold/40" style={{ background: "rgba(13,13,13,0.88)", backdropFilter: "blur(8px)" }}>
                    {p.roi}
                  </span>
                </div>
                <div className="p-5 pb-6">
                  <div className="font-display text-[1.6rem] font-normal text-obsidian mb-1">{p.price}</div>
                  <div className="text-[0.88rem] font-medium text-charcoal mb-0.5">{p.name}</div>
                  <div className="text-[0.78rem] text-mid mb-4 flex items-center gap-1.5">
                    <svg className="w-3 h-3 stroke-gold fill-none" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {p.location}
                  </div>
                  <div className="flex gap-5 pt-3 border-t border-obsidian/[0.07] mb-4">
                    {p.specs.map((s) => (
                      <span key={s} className="text-[0.75rem] text-mid">{s}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3 border-none cursor-pointer bg-obsidian text-gold font-body text-[0.72rem] font-semibold tracking-[0.14em] uppercase hover:bg-gold hover:text-obsidian transition-colors"
                  >
                    Inquire About This Property
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
