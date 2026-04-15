import { useState } from "react";
import { toast } from "sonner";

const CtaBand = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setEmail("");
    toast.success("Excellent! We'll be in touch within 2 hours to schedule your free session.");
  };

  return (
    <section id="cta-band" className="py-24 px-4 md:px-16 bg-gold text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)" }} />
      <div className="relative z-[1]">
        <div className="inline-flex items-center gap-2 bg-obsidian/10 py-1.5 px-4 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-obsidian mb-5">
          ⚡ Limited availability this week — spots filling fast
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-obsidian mb-3">
          Your Next Investment<br />Starts With <em className="italic">One Call.</em>
        </h2>
        <p className="text-base text-obsidian/70 mb-10 max-w-[500px] mx-auto">Get a free, no-pressure 30-minute strategy session with a senior broker. Walk away with a clear investment roadmap — whether you buy or not.</p>
        <div className="flex max-w-[560px] mx-auto border-2 border-obsidian">
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 border-none outline-none font-body text-[0.9rem]"
            style={{ background: "rgba(255,255,255,0.65)" }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button onClick={handleSubmit} className="bg-obsidian text-gold border-none cursor-pointer px-7 py-4 font-body text-[0.75rem] font-semibold tracking-[0.14em] uppercase hover:bg-charcoal transition-colors whitespace-nowrap">
            Claim My Free Session →
          </button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
          {["100% Confidential", "Reply in under 2 hours", "No spam. No pressure."].map((t) => (
            <span key={t} className="text-[0.72rem] text-obsidian/60 flex items-center gap-1.5">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
