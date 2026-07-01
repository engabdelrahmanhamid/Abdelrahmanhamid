import ApproachSection from "@/components/home/ApproachSection";
import ContactSection from "@/components/home/ContactSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import LatestProjectsSection from "@/components/home/LatestProjectsSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import ScrollServicesSection from "@/components/home/ScrollServicesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import VisualBannerSection from "@/components/home/VisualBannerSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-black">
      <HeroSection />
      <ScrollServicesSection />
      {/* <TrustedBySection /> */}
      <IntroSection />
      <MarqueeSection />
      <LatestProjectsSection />
      <ApproachSection />
      {/* <VisualBannerSection /> */}
      {/* <TestimonialSection /> */}
      <FaqSection />
      <ContactSection />
    </main>
  );
}
