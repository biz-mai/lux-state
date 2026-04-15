import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Ticker from "@/components/Ticker";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProofBar from "@/components/ProofBar";
import SearchBar from "@/components/SearchBar";
import InvestorStrip from "@/components/InvestorStrip";
import PropertiesSection from "@/components/PropertiesSection";
import AboutStrip from "@/components/AboutStrip";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBand from "@/components/CtaBand";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultModal from "@/components/ConsultModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      window.history.replaceState({}, "");
    }
  }, [location.state]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div>
      <Ticker />
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <HeroSection onOpenModal={() => setModalOpen(true)} />
      <ProofBar />
      <SearchBar />
      <InvestorStrip />
      <PropertiesSection onOpenModal={() => setModalOpen(true)} />
      <AboutStrip />
      <ServicesSection />
      <WhySection />
      <TestimonialsSection />
      <CtaBand />
      <BlogSection />
      <ContactSection />
      <Footer />
      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Index;
