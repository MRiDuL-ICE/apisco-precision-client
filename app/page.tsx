import { HeroSection } from "@/components/site/hero-section";
import { AboutSection } from "@/components/site/about-section";
import { ServicesSection } from "@/components/site/services-section";
import { ProductSection } from "@/components/site/product-section";
import { SupportSection } from "@/components/site/support-section";
import { SolutionsSection } from "@/components/site/solutions-section";
import { ContactSection } from "@/components/site/contact-section";
import { GsapRevealInit } from "@/components/site/gsap-reveal-init";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Apisco Precision",
  description:
    "Apisco Precision connects global API manufacturers with Bangladesh's pharmaceutical industry through precise sourcing, documentation and logistics.",
};
export default function HomePage() {
  return (
    <div className="site-shell">
      <GsapRevealInit />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductSection />
        <SupportSection />
        <SolutionsSection />
        <ContactSection />
      </main>
    </div>
  );
}
