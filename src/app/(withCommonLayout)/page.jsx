import HighlightsSection from "@/components/HighlightsSection";
import PackagesSection from "@/components/PackagesSection";
import ServicesSection from "@/components/ServicesSection";
import StatisticsSection from "@/components/StatisticsSection";
import GallerySection from "@/components/GallerySection";
import EventOverview from "@/components/EventOverview";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <EventOverview />  
      <HighlightsSection />
      <PackagesSection />
      <ServicesSection />
      <StatisticsSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
