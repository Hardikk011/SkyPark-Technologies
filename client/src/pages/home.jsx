import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import PartnersSection from "@/components/partners-section";
import SolutionsSection from "@/components/solutions-section";
import Footer from "@/components/footer";

const Home = () => {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure page is rendered
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <SolutionsSection />
      <Footer />
    </div>
  );
};

export default Home;



