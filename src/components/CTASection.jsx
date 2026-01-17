import React from "react";
import { FaRegHandshake } from "react-icons/fa";

export const CTASection = () => (
  <section className="relative bg-gray-50 py-16 px-6 sm:px-8 md:px-12 overflow-hidden font-sans">
    <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-200 rounded-full opacity-20 pointer-events-none"></div>
    <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-yellow-200 rounded-full opacity-20 pointer-events-none"></div>
    <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
      <div className="inline-flex items-center justify-center mb-2 p-3 bg-blue-100 rounded-full shadow-sm">
        <FaRegHandshake className="w-8 h-8 text-blue-700" />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
        Plan Your Event With Confidence
      </h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Work with our experienced team to design, manage, and deliver exceptional events tailored to your objectives.
      </p>
      <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:from-blue-800 hover:to-blue-600 transition-all duration-300">
        Get a Free Consultation
      </button>
    </div>
  </section>
);
export default CTASection;
