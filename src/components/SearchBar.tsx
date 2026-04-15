import { useState } from "react";
import { toast } from "sonner";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = () => {
    const filters: string[] = [];
    if (location && location !== "Location / City") filters.push(location);
    if (type && type !== "Property Type") filters.push(type);
    if (price && price !== "Price Range") filters.push(price);

    // Scroll to properties section
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth" });
    }

    if (filters.length === 0) {
      toast.info("Showing all available properties. Use filters to narrow your search.");
    } else {
      toast.success(`Searching for: ${filters.join(" · ")}. Showing matched listings below.`);
    }
  };

  return (
    <section id="search-bar" className="bg-obsidian border-b border-gold/20 py-6 px-4 md:px-16">
      <h3 className="text-center font-display text-base font-light text-silver mb-4 tracking-[0.04em]">Find Your Next Investment Property</h3>
      <div className="flex flex-col md:flex-row items-stretch max-w-[1000px] mx-auto border border-gold/30" style={{ background: "rgba(255,255,255,0.04)" }}>
        {[
          { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>, value: location, onChange: setLocation, placeholder: "Location / City", options: ["Location / City", "Makati City", "BGC, Taguig", "Alabang", "Paranaque", "Quezon City"] },
          { icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>, value: type, onChange: setType, placeholder: "Property Type", options: ["Property Type", "Condominium", "House & Lot", "Townhouse", "Commercial", "Land"] },
          { icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></>, value: price, onChange: setPrice, placeholder: "Price Range", options: ["Price Range", "Under ₱5M", "₱5M – ₱15M", "₱15M – ₱30M", "₱30M – ₱60M", "₱60M+"] },
        ].map((field, i) => (
          <div key={i} className="flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-gold/20 last:border-r-0 last:border-b-0">
            <svg className="w-4 h-4 stroke-gold fill-none flex-shrink-0" strokeWidth={1.5} viewBox="0 0 24 24">{field.icon}</svg>
            <select value={field.value || field.placeholder} onChange={(e) => field.onChange(e.target.value)} className="bg-transparent border-none outline-none font-body text-[0.85rem] text-silver w-full cursor-pointer appearance-none">
              {field.options.map((o) => <option key={o} value={o} className="bg-charcoal text-silver">{o}</option>)}
            </select>
            <svg className="w-3 h-3 stroke-gold fill-none flex-shrink-0" strokeWidth={2} viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        ))}
        <button onClick={handleSearch} className="bg-gold border-none cursor-pointer px-8 h-[54px] font-body text-[0.75rem] font-semibold tracking-[0.16em] uppercase text-obsidian hover:bg-gold-light transition-colors whitespace-nowrap">
          Search Listings →
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
