import HeroSection from "@/components/HeroSection";
import EventOverview from "@/components/EventOverview";
import HighlightsSection from "@/components/HighlightsSection";
import PackagesSection from "@/components/PackagesSection";
import ServicesSection from "@/components/ServicesSection";
import StatisticsSection from "@/components/StatisticsSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EventOverview />
       <ServicesSection />   
      <HighlightsSection />
      <PackagesSection />
      <StatisticsSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
