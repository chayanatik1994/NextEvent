"use client";
import React from "react";
import { FaBuilding, FaPaintBrush, FaUtensils, FaCameraRetro, FaMusic, FaGift, FaLeaf, FaStar } from "react-icons/fa";

export const ServicesSection = () => {
  const services = [
    { title: "Venue Selection", icon: FaBuilding },
    { title: "Decoration & Theme Setup", icon: FaPaintBrush },
    { title: "Catering Management", icon: FaUtensils },
    { title: "Photography & Videography", icon: FaCameraRetro },
    { title: "Live Entertainment", icon: FaMusic },
    { title: "Gift & Favor Management", icon: FaGift },
    { title: "Floral & Greenery Setup", icon: FaLeaf },
    { title: "Event Coordination", icon: FaStar },
  ];

  const iconColors = [
    "text-blue-600",
    "text-purple-600",
    "text-green-500",
    "text-yellow-500",
    "text-red-500",
    "text-indigo-500",
    "text-pink-500",
    "text-teal-500",
  ];

  return (
    <section className=" bg-gray-50 px-6 sm:px-8 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900 tracking-tight">
          Our Services
        </h2>
        <div className="overflow-hidden relative">
          <ul className="flex gap-6 animate-marquee">
            {services.concat(services).map((service, index) => {
              const IconComponent = service.icon;
              const colorClass = iconColors[index % iconColors.length];
              return (
                <li key={index} className="min-w-[200px] p-5 bg-white rounded-2xl shadow-md border-l-4 border-blue-600 flex flex-col justify-center items-center text-center space-y-2">
                  <IconComponent className={`${colorClass} w-10 h-10`} />
                  <span className="text-lg font-semibold text-gray-800">{service.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
