import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const posts = [
  { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop", cat: "Market Report", title: "Metro Manila Property Market: What to Expect in 2025", meta: "May 12, 2025 · 5 min read" },
  { img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop", cat: "Investment", title: "6 Signs a Pre-Selling Condo Is Actually Worth Buying", meta: "April 28, 2025 · 7 min read" },
  { img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=600&auto=format&fit=crop", cat: "OFW Guide", title: "How OFWs Can Buy Property in the Philippines — Step by Step", meta: "April 10, 2025 · 6 min read" },
];

const BlogSection = () => {
  const navigate = useNavigate();
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
    <section id="blog" className="py-28 px-4 md:px-16 bg-white" ref={ref}>
      <div className="flex items-end justify-between mb-14">
        <div>
          <span className="inline-block text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold mb-4 before:content-['—_'] after:content-['_—']">Investor Insights</span>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.1] text-obsidian">Latest From<br />Our Experts</h2>
        </div>
        <button onClick={() => navigate("/articles")} className="hidden md:inline-block text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-gold bg-transparent px-9 py-[0.95rem] border border-gold cursor-pointer hover:bg-gold hover:text-obsidian hover:-translate-y-0.5 transition-all">
          All Articles
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <div key={i} className="fade-up cursor-pointer group">
            <div className="h-[220px] overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500" />
            </div>
            <div className="py-5">
              <div className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-gold mb-2">{p.cat}</div>
              <div className="font-display text-[1.25rem] font-normal text-obsidian leading-[1.35] mb-2.5">{p.title}</div>
              <div className="text-[0.75rem] text-mid">{p.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
