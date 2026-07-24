import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import AboutPreview from "../components/home/AboutPreview";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import GalleryPreview from "../components/home/GalleryPreview";
import CTA from "../components/home/CTA";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FloatingWhatsapp from "../components/common/FloatingWhatsapp";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import ContactPreview from "../components/home/ContactPreview";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <MainLayout>
  <Hero />
  <Stats />
  <AboutPreview />
  <ServicesSection />
  <FeaturedProjects />
  <GalleryPreview />
  <CTA />
  <WhyChooseUs />
  <FloatingWhatsapp />
  <ScrollToTopButton />
  <ContactPreview />
</MainLayout>
  );
};

export default Home;