import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/HeroSection";

export default function Layout({ children, showHero = false }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="sticky top-0 z-50" />

      {showHero && <HeroSection />}

      <main className="flex-1 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
