import { useState } from "react";
import { toast } from "sonner";

const EMPTY_FORM = {
  firstName: "", lastName: "", email: "", phone: "",
  goal: "Buy a Home or Condo", budget: "Under ₱5M", message: "",
};

const ContactSection = () => {
  const [form, setForm]       = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.firstName.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      toast.success("Request received! A senior broker will contact you shortly.");
      setForm(EMPTY_FORM);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
      <div className="bg-charcoal px-6 md:px-16 py-20 flex flex-col justify-center">
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Get in Touch</span>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.1] text-white mb-3">Let's Build Your<br />Property Portfolio</h2>
        <p className="text-silver text-[0.9rem] leading-[1.85] mb-6">Whether you're buying your first home, growing an investment portfolio, or selling at the right time — our senior brokers are ready to guide you.</p>
        <div className="font-display text-[1.05rem] italic text-gold-light mb-8 leading-[1.5]">"The best time to invest in property was 10 years ago. The second best time is today."</div>
        <div className="flex flex-col gap-3 mb-8">
          {[
            { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>, text: "8F Ayala Avenue Tower, Makati City 1226" },
            { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.65A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />, text: "+63 (2) 8888 – LUXE (5893)" },
            { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>, text: "invest@luxestate.ph" },
          ].map((d, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border-l-2 border-gold bg-gold/[0.05]">
              <svg className="w-[18px] h-[18px] stroke-gold fill-none flex-shrink-0" strokeWidth={1.5} viewBox="0 0 24 24">{d.icon}</svg>
              <span className="text-[0.875rem] text-silver">{d.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[0.75rem] text-gold font-semibold tracking-[0.08em]">
          <span className="w-2 h-2 rounded-full bg-[#4caf7d] flex-shrink-0 animate-pulse-dot" />
          We're online — average response: 90 minutes
        </div>
      </div>

      <div className="bg-off-white px-6 md:px-16 py-20 flex flex-col justify-center">
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-6 before:content-['—_'] after:content-['_—']">Book Your Free Strategy Session</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-mid">First Name</label>
            <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} type="text" placeholder="Juan" className="font-body text-[0.9rem] text-charcoal border border-obsidian/15 bg-white p-3 outline-none focus:border-gold transition-colors" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-mid">Last Name</label>
            <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} type="text" placeholder="dela Cruz" className="font-body text-[0.9rem] text-charcoal border border-obsidian/15 bg-white p-3 outline-none focus:border-gold transition-colors" />
          </div>
        </div>
        {[
          { label: "Email Address", type: "email", key: "email", placeholder: "juan@email.com" },
          { label: "Phone / WhatsApp", type: "tel", key: "phone", placeholder: "+63 9XX XXX XXXX" },
        ].map((f) => (
          <div key={f.key} className="flex flex-col gap-1.5 mb-4">
            <label className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-mid">{f.label}</label>
            <input value={form[f.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} type={f.type} placeholder={f.placeholder} className="font-body text-[0.9rem] text-charcoal border border-obsidian/15 bg-white p-3 outline-none focus:border-gold transition-colors" />
          </div>
        ))}
        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-mid">My Investment Goal</label>
          <select value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} className="font-body text-[0.9rem] text-charcoal border border-obsidian/15 bg-white p-3 outline-none focus:border-gold transition-colors">
            {["Buy a Home or Condo", "Grow My Investment Portfolio", "Sell My Property", "OFW – Invest from Abroad", "Pre-Selling / Off-Plan Units", "General Inquiry"].map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-mid">Approximate Budget</label>
          <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="font-body text-[0.9rem] text-charcoal border border-obsidian/15 bg-white p-3 outline-none focus:border-gold transition-colors">
            {["Under ₱5M", "₱5M – ₱15M", "₱15M – ₱30M", "₱30M – ₱60M", "₱60M+"].map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-mid">Tell us more (optional)</label>
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are you looking for? Timeline? Any questions?" className="font-body text-[0.9rem] text-charcoal border border-obsidian/15 bg-white p-3 outline-none focus:border-gold transition-colors resize-y min-h-[110px]" />
        </div>
        <button onClick={handleSubmit} disabled={loading} className="w-full text-center text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-obsidian bg-gold py-4 border-none cursor-pointer hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(184,150,90,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
          {loading ? "Sending…" : "Book My Free Session →"}
        </button>
        <div className="text-[0.72rem] text-mid mt-3 text-center">🔒 Your information is private and never shared. No spam, ever.</div>
      </div>
    </section>
  );
};

export default ContactSection;
