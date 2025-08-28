import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import PartnersSection from "@/components/partners-section";
import SolutionsSection from "@/components/solutions-section";
import Footer from "@/components/footer";

const Home = () => {
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
