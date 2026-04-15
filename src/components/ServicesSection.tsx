import { useNavigate } from "react-router-dom";

const services = [
  { num: "01", slug: "buy-a-property",      title: "Buy a Property",       desc: "We match you with the right property based on your lifestyle, budget, and long-term goals. We handle every step from shortlisting to turnover.",                                        icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></> },
  { num: "02", slug: "sell-your-property",  title: "Sell Your Property",   desc: "Professional marketing, precise pricing, and a network of pre-qualified buyers means your property sells faster — and at the price it deserves.",                                   icon: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></> },
  { num: "03", slug: "investment-strategy", title: "Investment Strategy",  desc: "From pre-selling condos to commercial units, we help you build a property portfolio calibrated for both rental yield and capital appreciation.",                                       icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /> },
  { num: "04", slug: "ofw-buyer-services",  title: "OFW Buyer Services",   desc: "Buying remotely from abroad? We handle the entire process — viewings, negotiation, paperwork, and turnover — so you can invest from anywhere.",                                      icon: <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /> },
  { num: "05", slug: "legal-documentation", title: "Legal & Documentation", desc: "Title transfers, contracts to sell, HLURB clearances — our in-house team ensures every document is verified, compliant, and delivered on time.",                                      icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></> },
  { num: "06", slug: "property-management", title: "Property Management",  desc: "We handle tenant screening, lease agreements, maintenance, and rent collection — so your investment earns passively without the headache.",                                          icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></> },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
  <section id="services" className="py-28 px-4 md:px-16 bg-charcoal">
    <span className="block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">What We Do</span>
    <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.1] text-white">Expert Services<br />Tailored to Investors</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-14 border border-gold/20">
      {services.map((s) => (
        <div key={s.num} className="group relative overflow-hidden p-10 border border-gold/10 hover:bg-gold/[0.06] transition-all duration-300 cursor-pointer" style={{ background: "rgba(255,255,255,0.02)" }} onClick={() => navigate(`/services/${s.slug}`)}>
          <div className="service-card-line" />
          <div className="font-display text-[3.5rem] font-light text-gold/20 leading-none mb-5">{s.num}</div>
          <div className="w-11 h-11 mb-5 bg-gold/10 border border-gold/30 flex items-center justify-center">
            <svg className="w-5 h-5 stroke-gold fill-none" strokeWidth={1.5} viewBox="0 0 24 24">{s.icon}</svg>
          </div>
          <h3 className="font-display text-2xl font-normal text-white mb-3">{s.title}</h3>
          <p className="text-[0.875rem] text-silver leading-[1.8] mb-6">{s.desc}</p>
          <span className="text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-gold flex items-center gap-2 group-hover:gap-3.5 transition-all">
            Learn More<span>→</span>
          </span>
        </div>
      ))}
    </div>
  </section>
  );
};

export default ServicesSection;
