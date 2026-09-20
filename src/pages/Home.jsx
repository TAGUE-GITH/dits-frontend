import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ServicesSection from "../components/home/ServicesSection";
import ArticlesSection from "../components/home/ArticlesSection";
import PartnersSection from "../components/home/PartnersSection";
import CtaSection from "../components/home/CtaSection";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesSection />
      <ArticlesSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
}