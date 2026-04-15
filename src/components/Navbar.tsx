import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed left-0 right-0 z-[1000] flex items-center justify-between px-4 md:px-16 py-4 border-b border-gold/20 transition-all duration-400"
      style={{
        top: "30px",
        background: scrolled ? "rgba(13,13,13,0.98)" : "rgba(13,13,13,0.92)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div
        className="font-display text-[1.6rem] font-semibold text-gold tracking-[0.06em] flex items-center gap-2 cursor-pointer"
        onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
      >
        Lux<span className="text-white">Estate</span>
      </div>

      <ul className="hidden lg:flex gap-9 list-none">
        {[
          { label: "Home", action: () => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); } },
          { label: "About", action: () => navigate("/about") },
          { label: "Properties", action: () => scrollToSection("properties") },
          { label: "Services", action: () => scrollToSection("services") },
          { label: "Insights", action: () => scrollToSection("blog") },
          { label: "Contact", action: () => scrollToSection("contact") },
        ].map((item) => (
          <li key={item.label}>
            <button
              onClick={item.action}
              className="text-[0.8rem] font-medium tracking-[0.12em] uppercase text-silver hover:text-gold transition-colors bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-1.5 text-[0.8rem] text-silver tracking-[0.04em]">
          <svg className="w-[13px] h-[13px] stroke-gold fill-none" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.65A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
          </svg>
          +63 (2) 8888-LUXE
        </div>
        <button
          onClick={onOpenModal}
          className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-obsidian bg-gold px-6 py-3 border-none cursor-pointer hover:bg-gold-light hover:-translate-y-px transition-all whitespace-nowrap"
        >
          Free Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
