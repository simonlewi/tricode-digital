import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GradientDivider } from "@/components/ui/GradientDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <GradientDivider />
        <ServicesSection />
        <CaseStudySection />
        <GradientDivider />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
