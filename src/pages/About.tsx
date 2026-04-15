import { useState, useEffect } from "react";
import Ticker from "@/components/Ticker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultModal from "@/components/ConsultModal";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div>
      <Ticker />
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* Page Hero */}
      <div className="pt-44 pb-20 px-4 md:px-16 bg-obsidian text-center">
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Our Story</span>
        <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] text-white">
          Passionate About<br /><em className="italic">Property. Driven by People.</em>
        </h1>
        <p className="text-silver max-w-[560px] mx-auto mt-5 text-base leading-[1.75]">
          For over 15 years, LuxEstate has been the trusted name in premium real estate across Metro Manila. We believe every property transaction is not just a deal — it's a life-changing moment.
        </p>
      </div>

      {/* Who We Are */}
      <section className="py-24 px-4 md:px-16 bg-off-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Who We Are</span>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.1] text-obsidian">Built on Trust.<br />Powered by Expertise.</h2>
            <div className="w-12 h-px bg-gold my-5" />
            <p className="text-mid leading-[1.85] mb-4">LuxEstate was founded in 2009 by a team of licensed brokers with one mission: make real estate simple, transparent, and rewarding for every client.</p>
            <p className="text-mid leading-[1.85] mb-4">Today, we operate across Metro Manila with a team of 22 PRC-licensed real estate brokers and a combined portfolio of over ₱2.4 billion in closed transactions.</p>
            <p className="text-mid leading-[1.85] mb-8">We are not the biggest firm — but we are the most dedicated. Every client works directly with a senior broker, not an assistant. That's the LuxEstate promise.</p>
            <div className="flex gap-8 mt-4">
              {[
                { num: "850+", label: "Clients Served" },
                { num: "₱2.4B", label: "Transactions Closed" },
                { num: "4.9★", label: "Client Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[2.2rem] text-gold font-normal">{s.num}</div>
                  <div className="text-[0.78rem] text-mid uppercase tracking-[0.12em]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&auto=format&fit=crop" alt="LuxEstate Office" className="w-full object-cover" style={{ aspectRatio: "4/5" }} />
            <div className="absolute -bottom-6 -left-6 bg-gold p-6">
              <div className="font-display text-[1.8rem] text-obsidian font-normal">15+</div>
              <div className="text-[0.72rem] text-obsidian uppercase tracking-[0.14em] font-semibold">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 md:px-16 bg-off-white">
        <div className="text-center mb-10">
          <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Our People</span>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-[1.1] text-obsidian">Meet the Team</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { avatar: "A", name: "Antonio Reyes", role: "Founder & CEO", desc: "PRC Licensed Broker · 20 years experience" },
            { avatar: "C", name: "Carmen Lim", role: "Head of Residential", desc: "Luxury Property Specialist · 12 years" },
            { avatar: "J", name: "James Domingo", role: "Investment Strategist", desc: "Commercial & Pre-selling Expert · 10 years" },
            { avatar: "S", name: "Sofia Tan", role: "OFW Buyer Specialist", desc: "Remote Transaction Expert · 8 years" },
          ].map((t) => (
            <div key={t.name} className="text-center">
              <div className="w-full aspect-square bg-gold-pale flex items-center justify-center font-display text-[3rem] text-gold mb-4">{t.avatar}</div>
              <h4 className="font-display text-[1.2rem] font-normal text-obsidian">{t.name}</h4>
              <span className="text-[0.78rem] text-gold">{t.role}</span>
              <p className="text-[0.78rem] text-mid mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-16 bg-charcoal text-center">
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Join Our Journey</span>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.1] text-white mb-4">Ready to Work With the Best?</h2>
        <p className="text-silver mb-8 max-w-[480px] mx-auto">Let's find the perfect property or maximize the value of what you own. Our experts are standing by.</p>
        <button onClick={() => setModalOpen(true)} className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-obsidian bg-gold px-10 py-4 border-none cursor-pointer hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(184,150,90,0.4)] transition-all">
          Book a Free Consultation
        </button>
      </section>

      <Footer />
      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default About;
