import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { GradientDivider } from "@/components/ui/GradientDivider";

const ServicesSection = dynamic(() =>
  import("@/components/sections/ServicesSection").then(
    (m) => m.ServicesSection
  )
);
const CaseStudySection = dynamic(() =>
  import("@/components/sections/CaseStudySection").then(
    (m) => m.CaseStudySection
  )
);
const AboutSection = dynamic(() =>
  import("@/components/sections/AboutSection").then((m) => m.AboutSection)
);
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then(
    (m) => m.ContactSection
  )
);

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
