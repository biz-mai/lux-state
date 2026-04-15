import { useState } from "react";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultModal = ({ isOpen, onClose }: Props) => {
  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast.error("Please fill in all fields to continue.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      onClose();
      toast.success(`Thank you, ${name.split(" ")[0]}! A senior broker will confirm your session within 2 hours.`);
      setName(""); setPhone(""); setEmail("");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={handleOverlayClick}>
      <div className="modal-box bg-off-white max-w-[520px] w-[90%] p-12 border-t-[3px] border-gold relative">
        <button onClick={onClose} className="absolute top-5 right-5 bg-transparent border-none cursor-pointer text-mid text-xl leading-none hover:text-charcoal">✕</button>
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-2 before:content-['—_'] after:content-['_—']">Free Session</span>
        <h3 className="font-display text-[1.9rem] font-light text-obsidian mb-2">Book Your Free<br />Investment Strategy Call</h3>
        <p className="text-[0.88rem] text-mid mb-6 leading-[1.7]">30 minutes with a senior broker. Walk away with a clear roadmap — no commitment required.</p>
        {[
          { label: "Full Name", value: name, onChange: setName, type: "text", placeholder: "Juan dela Cruz" },
          { label: "Phone / WhatsApp", value: phone, onChange: setPhone, type: "tel", placeholder: "+63 9XX XXX XXXX" },
          { label: "Email Address", value: email, onChange: setEmail, type: "email", placeholder: "juan@email.com" },
        ].map((f) => (
          <div key={f.label} className="flex flex-col gap-1.5 mb-4">
            <label className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-mid">{f.label}</label>
            <input value={f.value} onChange={(e) => f.onChange(e.target.value)} type={f.type} placeholder={f.placeholder} className="font-body text-[0.9rem] text-charcoal border border-obsidian/15 bg-white p-3 outline-none focus:border-gold transition-colors" />
          </div>
        ))}
        <button onClick={handleSubmit} disabled={loading} className="w-full text-center text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-obsidian bg-gold py-4 mt-2 border-none cursor-pointer hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(184,150,90,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
          {loading ? "Sending…" : "Confirm My Free Session →"}
        </button>
        <div className="text-[0.72rem] text-mid mt-3 text-center">🔒 Private & confidential. We'll confirm within 2 hours.</div>
      </div>
    </div>
  );
};

export default ConsultModal;
