import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import AboutPreview from "../components/home/AboutPreview";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CTA from "../components/home/CTA";

import FloatingWhatsapp from "../components/common/FloatingWhatsapp";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const Home = () => {
  return (
    <MainLayout>

      <Hero />

      <Stats />

      <AboutPreview />

      <ServicesSection />

      <FeaturedProjects />

      <CTA />

      <FloatingWhatsapp />

      <ScrollToTopButton />

    </MainLayout>
  );
};

export default Home;