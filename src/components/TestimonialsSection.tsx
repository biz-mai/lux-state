import { useEffect, useRef } from "react";

const testimonials = [
  { stars: "★★★★★", text: '"LuxEstate found us our dream home in BGC within 3 weeks. Their knowledge of the market and patience with us as first-time buyers was outstanding."', name: "Maria Santos", role: "Homebuyer, BGC Taguig", avatar: "M", badge: "Verified Buyer", outcome: "Property appreciated 22% in 18 months" },
  { stars: "★★★★★", text: '"They sold my Makati condo in just 11 days — at asking price. The marketing strategy and buyer network made all the difference."', name: "Rafael Cruz", role: "Property Seller, Makati CBD", avatar: "R", badge: "Verified Seller", outcome: "Sold at full asking price in 11 days" },
  { stars: "★★★★★", text: '"As an OFW in Dubai, I needed someone I could trust completely. LuxEstate managed everything remotely — from shortlisting to turnover. Zero stress."', name: "Arlene Reyes", role: "OFW Investor, Dubai", avatar: "A", badge: "OFW Investor", outcome: "2 investment units closed fully remote" },
];

const TestimonialsSection = () => {
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
    <section id="testimonials" className="py-28 px-4 md:px-16 bg-off-white" ref={ref}>
      <div className="text-center mb-14">
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Client Stories</span>
        <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] text-obsidian">Real Results.<br />Real Investors.</h2>
        <p className="text-mid text-[0.95rem] mt-3">Join over 850 clients who've grown their wealth with LuxEstate.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="fade-up bg-white p-8 border-t-2 border-gold shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all relative">
            <div className="absolute top-5 right-5 text-[0.62rem] font-semibold tracking-[0.1em] uppercase text-gold flex items-center gap-1">
              <svg className="w-2.5 h-2.5 stroke-gold fill-none" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              {t.badge}
            </div>
            <div className="text-gold text-[0.9rem] tracking-[0.1em] mb-5">{t.stars}</div>
            <div className="font-display text-[1.1rem] font-light text-charcoal leading-[1.75] italic mb-6">{t.text}</div>
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gold-pale flex items-center justify-center font-display text-[1.1rem] text-gold">{t.avatar}</div>
              <div>
                <div className="text-[0.85rem] font-semibold text-charcoal">{t.name}</div>
                <div className="text-[0.75rem] text-mid">{t.role}</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-obsidian/[0.06] text-[0.72rem] text-gold font-semibold tracking-[0.08em] uppercase flex items-center gap-1.5">
              ✓ {t.outcome}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
