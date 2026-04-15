import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-obsidian px-4 md:px-16 pt-16 pb-8 border-t border-gold/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.07]">
        <div>
          <div className="font-display text-[1.5rem] font-semibold text-gold tracking-[0.06em] mb-4 cursor-pointer" onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Lux<span className="text-white">Estate</span>
          </div>
          <p className="text-[0.83rem] text-mid leading-[1.8] max-w-[260px]">Premium real estate services for buyers, sellers, and investors across Metro Manila. Trusted since 2009.</p>
        </div>
        <div>
          <h5 className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">Properties</h5>
          <ul className="list-none flex flex-col gap-2.5">
            {["Buy a Home", "Sell Your Property", "Investment Units", "Commercial Space", "Pre-Selling"].map((l) => (
              <li key={l}><button onClick={() => scrollToSection("properties")} className="text-[0.83rem] text-mid hover:text-gold-light transition-colors bg-transparent border-none cursor-pointer p-0">{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">Company</h5>
          <ul className="list-none flex flex-col gap-2.5">
            <li><button onClick={() => navigate("/about")} className="text-[0.83rem] text-mid hover:text-gold-light transition-colors bg-transparent border-none cursor-pointer p-0">About Us</button></li>
            <li><button onClick={() => navigate("/about")} className="text-[0.83rem] text-mid hover:text-gold-light transition-colors bg-transparent border-none cursor-pointer p-0">Our Team</button></li>
            <li><button onClick={() => scrollToSection("blog")} className="text-[0.83rem] text-mid hover:text-gold-light transition-colors bg-transparent border-none cursor-pointer p-0">Blog / Insights</button></li>
            <li><button className="text-[0.83rem] text-mid hover:text-gold-light transition-colors bg-transparent border-none cursor-pointer p-0">Careers</button></li>
            <li><button className="text-[0.83rem] text-mid hover:text-gold-light transition-colors bg-transparent border-none cursor-pointer p-0">Partnerships</button></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-gold mb-5">Contact</h5>
          <ul className="list-none flex flex-col gap-2.5">
            {["Makati City Office", "+63 (2) 8888-5893", "invest@luxestate.ph", "Mon–Sat: 8am–7pm"].map((l) => (
              <li key={l}><span className="text-[0.83rem] text-mid">{l}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[0.75rem] text-mid gap-4">
        <span>© 2025 LuxEstate Realty Corp. All rights reserved. | PRC License No. 0012345</span>
        <div className="flex gap-4">
          {[
            { href: "https://www.facebook.com/",  label: "Facebook",  icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
            { href: "https://www.instagram.com/", label: "Instagram", icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
            { href: "https://www.linkedin.com/",  label: "LinkedIn",  icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
            { href: "https://www.youtube.com/",   label: "YouTube",   icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="w-[34px] h-[34px] border border-gold/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all">
              <svg className="w-3.5 h-3.5 stroke-silver fill-none" strokeWidth={1.5} viewBox="0 0 24 24">{item.icon}</svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
