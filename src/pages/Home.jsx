import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Expertise from "../components/home/Expertise";
import ServicesSection from "../components/home/ServicesSection";
import ArticlesSection from "../components/home/ArticlesSection";
import PartnersSection from "../components/home/PartnersSection";
import CtaSection from "../components/home/CtaSection";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <ServicesSection />
      <ArticlesSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
}