import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ALL_POSTS = [
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    cat: "Market Report",
    title: "Metro Manila Property Market: What to Expect in 2025",
    excerpt: "Rising demand in BGC, Pasig, and the Bay Area is reshaping where smart investors are putting their money. Here's our full market outlook for the year ahead.",
    meta: "May 12, 2025 · 5 min read",
    author: "Carlos Reyes, Senior Broker",
  },
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
    cat: "Investment",
    title: "6 Signs a Pre-Selling Condo Is Actually Worth Buying",
    excerpt: "Not all pre-selling units are good investments. We break down the six key indicators our brokers look for before recommending any off-plan property to clients.",
    meta: "April 28, 2025 · 7 min read",
    author: "Maria Santos, Investment Advisor",
  },
  {
    img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&auto=format&fit=crop",
    cat: "OFW Guide",
    title: "How OFWs Can Buy Property in the Philippines — Step by Step",
    excerpt: "A complete guide for overseas Filipinos looking to purchase real estate back home, covering everything from financing to Special Power of Attorney.",
    meta: "April 10, 2025 · 6 min read",
    author: "Joven Alcantara, OFW Services Head",
  },
  {
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop",
    cat: "Legal Guide",
    title: "Title Transfer in the Philippines: The Complete Process Explained",
    excerpt: "From BIR clearance to Registry of Deeds — a step-by-step breakdown of what happens after you sign a Deed of Sale, and how long each stage realistically takes.",
    meta: "March 25, 2025 · 8 min read",
    author: "Atty. Liza Domingo, Documentation Head",
  },
  {
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop",
    cat: "Investment",
    title: "Rental Yield vs Capital Appreciation: Which Should You Prioritize?",
    excerpt: "Two different investment goals require two different strategies. We explain when to chase yield and when to bet on appreciation — and how to do both.",
    meta: "March 12, 2025 · 6 min read",
    author: "Carlos Reyes, Senior Broker",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    cat: "Market Report",
    title: "The Rise of Pasig City: Why Investors Are Moving East",
    excerpt: "Once overlooked in favor of Makati and BGC, Pasig City has quietly emerged as one of Metro Manila's fastest-appreciating corridors. Here's the data behind the trend.",
    meta: "February 28, 2025 · 5 min read",
    author: "Maria Santos, Investment Advisor",
  },
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop",
    cat: "OFW Guide",
    title: "Pag-IBIG Housing Loan for OFWs: Rates, Requirements & How to Apply",
    excerpt: "Everything OFW members need to know about the Pag-IBIG Fund housing loan program — from eligibility and rates to the full application process.",
    meta: "February 15, 2025 · 7 min read",
    author: "Joven Alcantara, OFW Services Head",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    cat: "Property Management",
    title: "How to Maximize Your Rental Income: 8 Proven Strategies",
    excerpt: "From furnishing decisions to lease structure and tenant screening — the strategies our property managers use to consistently achieve above-market rental rates.",
    meta: "January 30, 2025 · 6 min read",
    author: "Rachel Tan, Property Management",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    cat: "Market Report",
    title: "Commercial Real Estate in Metro Manila: Q1 2025 Update",
    excerpt: "Office vacancy rates, retail strip performance, and the surprising sectors showing the most absorption. Our quarterly deep-dive into commercial property trends.",
    meta: "January 18, 2025 · 9 min read",
    author: "Carlos Reyes, Senior Broker",
  },
];

const CATEGORIES = ["All", "Market Report", "Investment", "OFW Guide", "Legal Guide", "Property Management"];

export default function Articles() {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? ALL_POSTS : ALL_POSTS.filter((p) => p.cat === active);

  return (
    <div className="min-h-screen bg-white">
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
          Investor Insights
        </span>
        <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-white mb-4">
          All Articles &<br />Expert Guides
        </h1>
        <p className="text-silver text-[0.95rem] max-w-[500px] leading-[1.8]">
          Market reports, investment strategies, OFW guides, and legal tips from our senior brokers and advisors.
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-obsidian/10 px-4 md:px-16 py-5 flex flex-wrap gap-3 sticky top-0 z-10 shadow-sm">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 border transition-all cursor-pointer ${
              active === cat
                ? "bg-gold text-obsidian border-gold"
                : "bg-transparent text-mid border-obsidian/20 hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-[0.78rem] text-mid self-center">{filtered.length} articles</span>
      </div>

      {/* Featured */}
      {active === "All" && (
        <div className="px-4 md:px-16 pt-16 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ALL_POSTS.slice(0, 2).map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="h-[280px] overflow-hidden mb-5">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                </div>
                <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-gold mb-2">{p.cat}</div>
                <h2 className="font-display text-[1.5rem] font-normal text-obsidian leading-[1.35] mb-2">{p.title}</h2>
                <p className="text-[0.875rem] text-mid leading-[1.8] mb-3">{p.excerpt}</p>
                <div className="text-[0.75rem] text-mid">{p.meta} · {p.author}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="px-4 md:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(active === "All" ? ALL_POSTS.slice(2) : filtered).map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-[200px] overflow-hidden mb-4">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500" />
              </div>
              <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-gold mb-2">{p.cat}</div>
              <h3 className="font-display text-[1.2rem] font-normal text-obsidian leading-[1.35] mb-2">{p.title}</h3>
              <p className="text-[0.84rem] text-mid leading-[1.75] mb-3 line-clamp-2">{p.excerpt}</p>
              <div className="text-[0.72rem] text-mid">{p.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
