import { useNavigate } from "react-router-dom";

const AboutStrip = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 min-h-[580px]">
      <div className="relative overflow-hidden h-[300px] md:h-auto">
        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop" alt="Luxury real estate property" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent 70%, hsl(30 25% 96%) 100%)" }} />
      </div>
      <div className="bg-off-white px-6 md:px-16 py-20 flex flex-col justify-center">
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Our Story</span>
        <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-[1.1] text-obsidian mb-2">
          Your Trusted<br />Real Estate Partner<br /><em className="italic">Since 2009</em>
        </h2>
        <div className="w-12 h-px bg-gold my-5" />
        <p className="text-[0.95rem] text-mid leading-[1.85] mb-5">LuxEstate was founded with one clear purpose: to bring transparency, expertise, and genuine care to one of life's most important financial decisions.</p>
        <p className="text-[0.95rem] text-mid leading-[1.85] mb-5">Over 15 years, we have helped more than 850 families and investors find, buy, sell, and grow wealth through property — always putting your goals first.</p>
        <div className="flex flex-wrap gap-2.5 my-5 mb-8">
          {["PRC Licensed Brokers", "HLURB Accredited", "Top 1% Agents", "Award-Winning"].map((p) => (
            <span key={p} className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold border border-gold/40 py-2 px-4">{p}</span>
          ))}
        </div>
        <button onClick={() => navigate("/about")} className="self-start text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-obsidian bg-gold px-10 py-4 border-none cursor-pointer hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(184,150,90,0.4)] transition-all">
          Meet Our Team
        </button>
      </div>
    </section>
  );
};

export default AboutStrip;
