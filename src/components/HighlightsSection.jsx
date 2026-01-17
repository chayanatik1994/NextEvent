import React from "react";
import { FaCameraRetro, FaMusic, FaPalette, FaGift } from "react-icons/fa";

export const HighlightsSection = () => {
  const highlights = [
    { title: "Custom Wedding Themes", icon: FaPalette },
    { title: "Live Music & Entertainment", icon: FaMusic },
    { title: "Professional Photography", icon: FaCameraRetro },
    { title: "Personalized Decorations", icon: FaGift },
    { title: "Event Planning", icon: FaPalette },
    { title: "Custom Themes & Setup", icon: FaGift },
    { title: "Live Entertainment", icon: FaMusic },
    { title: "Photography & Videography", icon: FaCameraRetro },
  ];

  const iconColors = ["text-blue-600", "text-purple-600", "text-green-500", "text-yellow-500", "text-red-500", "text-indigo-500"];

  return (
    <section className=" bg-gray-50 px-6 sm:px-8 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900 tracking-tight">
          Event Highlights
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            const colorClass = iconColors[index % iconColors.length];
            return (
              <li key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center space-y-2">
                <IconComponent className={`${colorClass} w-10 h-10`} />
                <span className="text-lg font-semibold text-gray-800">{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};


export default HighlightsSection;
