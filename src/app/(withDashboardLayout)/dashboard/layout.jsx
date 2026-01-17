import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/shared/Footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />        
      <HeroSection />      
      <main className="flex-1 bg-gray-50 container mx-auto px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
