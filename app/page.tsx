import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { AboutSection } from "@/components/site/about-section";
import { ServicesSection } from "@/components/site/services-section";
import { ProductSection } from "@/components/site/product-section";
import { SupportSection } from "@/components/site/support-section";
import { SolutionsSection } from "@/components/site/solutions-section";
import { ContactSection } from "@/components/site/contact-section";
import { Footer } from "@/components/site/footer";
import { GsapRevealInit } from "@/components/site/gsap-reveal-init";

export default function HomePage() {
  return (
    <div className="site-shell">
      <GsapRevealInit />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductSection />
        <SupportSection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
