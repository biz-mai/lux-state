import { useParams, useNavigate } from "react-router-dom";
import ConsultModal from "@/components/ConsultModal";
import { useState } from "react";

const SERVICES = [
  {
    slug: "buy-a-property",
    num: "01",
    title: "Buy a Property",
    tagline: "Find the right home or investment — without the stress.",
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
    desc: "Whether you're buying your first home or expanding your investment portfolio, we match you with properties that align with your lifestyle, budget, and long-term goals. Our senior brokers handle everything — from shortlisting and site visits to negotiation and final turnover.",
    steps: [
      { n: "01", label: "Discovery Call", body: "We start with a 30-minute strategy call to understand your budget, timeline, and investment goals." },
      { n: "02", label: "Property Matching", body: "Our brokers shortlist properties that match your criteria from our exclusive and public listings network." },
      { n: "03", label: "Site Visits & Evaluation", body: "We schedule viewings and provide a detailed investment analysis for each shortlisted property." },
      { n: "04", label: "Offer & Negotiation", body: "We negotiate on your behalf to secure the best price and terms possible." },
      { n: "05", label: "Documentation & Turnover", body: "We guide you through contracts, title transfers, and the final handover of your property." },
    ],
    faqs: [
      { q: "How long does the buying process take?", a: "On average, 45–90 days from offer to turnover for resale properties. Pre-selling units have longer timelines based on project completion." },
      { q: "Do I need to be physically present?", a: "No. We offer full remote-buying services, especially for OFWs. Everything from viewings to signing can be facilitated online or via Special Power of Attorney." },
      { q: "What fees should I expect?", a: "Buyers typically pay for transfer taxes, registration fees, and notarial fees — usually 3–5% of the property value. We'll provide a full cost breakdown upfront." },
    ],
  },
  {
    slug: "sell-your-property",
    num: "02",
    title: "Sell Your Property",
    tagline: "Professional marketing. Pre-qualified buyers. Maximum price.",
    icon: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>,
    desc: "Selling a property is about timing, pricing, and presentation. We combine professional photography, targeted digital marketing, and a network of thousands of pre-qualified buyers to get your property sold — fast and at the right price.",
    steps: [
      { n: "01", label: "Property Valuation", body: "We conduct a comprehensive market analysis to determine the optimal listing price." },
      { n: "02", label: "Property Preparation", body: "Professional photography, video walkthrough, and listing copy crafted to attract serious buyers." },
      { n: "03", label: "Multi-Channel Marketing", body: "Your property is listed on major portals, our buyer network, and targeted social media campaigns." },
      { n: "04", label: "Buyer Screening", body: "We pre-qualify all inquiries so your time is only spent with serious, financially-ready buyers." },
      { n: "05", label: "Closing & Transfer", body: "We handle the full documentation process from deed of sale to title transfer." },
    ],
    faqs: [
      { q: "How do you determine the listing price?", a: "We use a combination of recent comparable sales in your area, current market demand, and the property's unique features to arrive at the optimal price." },
      { q: "What is the typical time to sell?", a: "Well-priced properties in Metro Manila typically sell within 30–90 days. Our pre-qualified buyer network often accelerates this." },
      { q: "What are the seller's costs?", a: "Sellers are responsible for Capital Gains Tax (6%), Documentary Stamp Tax (1.5%), and agent commission. We'll walk you through the full breakdown." },
    ],
  },
  {
    slug: "investment-strategy",
    num: "03",
    title: "Investment Strategy",
    tagline: "Build a property portfolio calibrated for returns.",
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    desc: "Real estate investment done right requires more than just picking a property. We analyze rental yield, capital appreciation potential, location macro-trends, and developer track records to help you build a portfolio that grows measurably over time.",
    steps: [
      { n: "01", label: "Investment Profile", body: "We assess your risk appetite, capital, timeline, and income goals to define your investment profile." },
      { n: "02", label: "Market Analysis", body: "We identify the highest-yield micro-markets in Metro Manila based on current data and future development plans." },
      { n: "03", label: "Property Selection", body: "We present a curated shortlist of investment-grade properties with detailed ROI projections." },
      { n: "04", label: "Acquisition Strategy", body: "We advise on payment schemes, financing options, and pre-selling entry points to maximize leverage." },
      { n: "05", label: "Portfolio Review", body: "Ongoing quarterly check-ins to review your portfolio performance and identify new opportunities." },
    ],
    faqs: [
      { q: "What ROI can I realistically expect?", a: "Our portfolio clients typically achieve 12–22% annual returns combining rental yield and capital appreciation, depending on property type and location." },
      { q: "Is pre-selling worth the risk?", a: "For accredited developers in high-demand corridors, pre-selling offers the best entry price and highest upside. We only recommend developers with proven delivery records." },
      { q: "How much capital do I need to start?", a: "You can begin with as little as ₱3–5M in a well-chosen pre-selling condo. We'll structure a strategy that fits your available capital." },
    ],
  },
  {
    slug: "ofw-buyer-services",
    num: "04",
    title: "OFW Buyer Services",
    tagline: "Invest in the Philippines from anywhere in the world.",
    icon: <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />,
    desc: "Living and working abroad shouldn't stop you from building wealth back home. Our OFW Buyer Services are specifically designed for Filipinos overseas — handling everything from remote viewings and documentation to turnover — so you can invest with full confidence from anywhere.",
    steps: [
      { n: "01", label: "Online Strategy Session", body: "We meet via Zoom or WhatsApp to understand your goals, budget, and preferred location." },
      { n: "02", label: "Virtual Property Tour", body: "We conduct live video walkthroughs of shortlisted properties so you can evaluate them remotely." },
      { n: "03", label: "SPA Preparation", body: "We help you prepare a Special Power of Attorney so a trusted representative can sign on your behalf." },
      { n: "04", label: "Remote Documentation", body: "Contracts, payments, and all legal documents are processed with digital copies sent to you directly." },
      { n: "05", label: "Turnover & Handover", body: "We handle the final inspection and key turnover on your behalf, with a full photo/video report sent to you." },
    ],
    faqs: [
      { q: "Do I need to fly home to buy a property?", a: "No. With a properly executed Special Power of Attorney, the entire process can be handled remotely. We've successfully closed hundreds of transactions for OFW clients abroad." },
      { q: "Can OFWs get a housing loan?", a: "Yes. Pag-IBIG Fund offers OFW housing loans with competitive rates. Some banks also offer OFW mortgage products. We can connect you with the right financing partner." },
      { q: "How do I remit payment from abroad?", a: "We work with clients sending payments via bank wire, Remitly, Western Union, and other services. We'll provide detailed payment instructions for each step." },
    ],
  },
  {
    slug: "legal-documentation",
    num: "05",
    title: "Legal & Documentation",
    tagline: "Every document verified, compliant, and delivered on time.",
    icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></>,
    desc: "Real estate transactions in the Philippines involve complex documentation — title transfers, BIR clearances, HLURB requirements, and more. Our in-house documentation team ensures every requirement is met accurately and on schedule, protecting your investment at every step.",
    steps: [
      { n: "01", label: "Document Checklist", body: "We provide a complete checklist of requirements based on your specific transaction type." },
      { n: "02", label: "Title Verification", body: "We verify the authenticity and encumbrance-free status of the title at the Registry of Deeds." },
      { n: "03", label: "Contract Preparation", body: "We draft or review Contracts to Sell, Deed of Sale, and all supporting agreements." },
      { n: "04", label: "BIR & Transfer Processing", body: "We handle Capital Gains Tax filing, documentary stamps, and title transfer at the Registry of Deeds." },
      { n: "05", label: "Title Release", body: "We follow up and secure the clean title in your name, and hand it over with a full document package." },
    ],
    faqs: [
      { q: "How long does title transfer take?", a: "Typically 3–6 months for a straightforward transfer. Delays can occur at the BIR or Registry of Deeds — we proactively follow up on your behalf." },
      { q: "What is the risk of a fake title?", a: "Title fraud exists. We always verify titles at the Registry of Deeds and cross-check tax declarations to ensure authenticity before any transaction proceeds." },
      { q: "Do you handle bank financing documentation?", a: "Yes. We coordinate with lending banks to compile all required documents for mortgage processing, including appraisal schedules and loan releases." },
    ],
  },
  {
    slug: "property-management",
    num: "06",
    title: "Property Management",
    tagline: "Your property earns passively. We handle the rest.",
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
    desc: "Once your property is acquired, the work doesn't stop. Our property management team handles tenant screening, lease agreements, rent collection, maintenance coordination, and monthly reporting — so your investment generates passive income without the day-to-day hassle.",
    steps: [
      { n: "01", label: "Property Onboarding", body: "We assess your unit, recommend any improvements to maximize rental value, and set the optimal rental rate." },
      { n: "02", label: "Tenant Marketing", body: "We list and market your unit to find qualified tenants quickly, minimizing vacancy periods." },
      { n: "03", label: "Tenant Screening", body: "Full background, credit, and employment checks on all applicants before presenting to you for approval." },
      { n: "04", label: "Lease & Rent Collection", body: "We prepare the lease agreement and handle monthly rent collection and remittance to your account." },
      { n: "05", label: "Maintenance & Reporting", body: "We coordinate all repairs and provide monthly reports on your unit's income and expenses." },
    ],
    faqs: [
      { q: "What is your management fee?", a: "Our property management fee is typically 8–10% of monthly rental income. We'll provide a clear fee structure during your onboarding session." },
      { q: "What if a tenant damages the property?", a: "We collect a security deposit (typically 2 months' rent) and conduct move-in/move-out inspections with full documentation to protect against damages." },
      { q: "Can you manage my property if I'm abroad?", a: "Absolutely. Remote property management for OFW landlords is one of our core services. You'll receive monthly statements and can reach us anytime via WhatsApp." },
    ],
  },
];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-mid mb-4">Service not found.</p>
          <button onClick={() => navigate("/")} className="text-gold underline">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero */}
      <div className="bg-charcoal pt-32 pb-20 px-4 md:px-16">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gold text-[0.75rem] tracking-[0.14em] uppercase font-semibold mb-8 bg-transparent border-none cursor-pointer hover:text-gold-light transition-colors"
        >
          <svg className="w-4 h-4 stroke-current fill-none" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </button>
        <div className="flex items-start gap-8">
          <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-7 h-7 stroke-gold fill-none" strokeWidth={1.5} viewBox="0 0 24 24">{service.icon}</svg>
          </div>
          <div>
            <div className="font-display text-[4rem] font-light text-gold/20 leading-none mb-2">{service.num}</div>
            <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-3 before:content-['—_'] after:content-['_—']">
              Our Services
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-white mb-3">{service.title}</h1>
            <p className="font-display italic text-gold-light text-[1.1rem]">{service.tagline}</p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-16 py-20 max-w-[1200px] mx-auto">
        {/* Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 mb-20">
          <div>
            <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Overview</span>
            <p className="text-[1rem] text-charcoal leading-[1.9]">{service.desc}</p>
          </div>
          <div className="bg-obsidian p-8 border-t-[3px] border-gold">
            <h3 className="font-display text-[1.4rem] font-light text-white mb-3">Ready to get started?</h3>
            <p className="text-silver text-[0.85rem] leading-[1.8] mb-6">Book a free 30-minute strategy session with a senior broker. No commitment required.</p>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full text-center text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-obsidian bg-gold py-4 border-none cursor-pointer hover:bg-gold-light transition-all"
            >
              Book Free Session →
            </button>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">How It Works</span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light text-obsidian mb-10">Our Process</h2>
          <div className="flex flex-col gap-0">
            {service.steps.map((step, i) => (
              <div key={i} className="flex gap-8 pb-8 relative">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 bg-obsidian border border-gold flex items-center justify-center text-gold text-[0.7rem] font-semibold tracking-[0.1em]">
                    {step.n}
                  </div>
                  {i < service.steps.length - 1 && <div className="w-px flex-1 bg-gold/20 mt-2" />}
                </div>
                <div className="pt-2 pb-4">
                  <h4 className="font-display text-[1.15rem] font-normal text-obsidian mb-1.5">{step.label}</h4>
                  <p className="text-[0.9rem] text-mid leading-[1.8]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Common Questions</span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light text-obsidian mb-10">FAQs</h2>
          <div className="flex flex-col gap-6">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-l-2 border-gold pl-6 py-2">
                <h4 className="font-body font-semibold text-obsidian text-[0.95rem] mb-2">{faq.q}</h4>
                <p className="text-[0.9rem] text-mid leading-[1.8]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other services */}
        <div>
          <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Explore More</span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light text-obsidian mb-8">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.slug !== slug).map((s) => (
              <button
                key={s.slug}
                onClick={() => navigate(`/services/${s.slug}`)}
                className="group text-left p-6 bg-white border border-obsidian/10 hover:border-gold hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all cursor-pointer"
              >
                <div className="font-display text-[1.8rem] font-light text-gold/20 leading-none mb-3">{s.num}</div>
                <div className="font-display text-[1.1rem] text-obsidian mb-1 group-hover:text-gold transition-colors">{s.title}</div>
                <div className="text-[0.78rem] text-gold flex items-center gap-2 mt-3">
                  Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
