import React from "react";
import { FaCalendarCheck, FaUsers, FaSmile, FaStar } from "react-icons/fa";

export const StatisticsSection = () => {
  const stats = [
    { label: "Events Managed", value: "300+", icon: FaCalendarCheck, color: "text-blue-600" },
    { label: "Years Experience", value: "10+", icon: FaStar, color: "text-yellow-500" },
    { label: "Client Satisfaction", value: "95%", icon: FaSmile, color: "text-green-600" },
    { label: "Professional Team", value: "50+", icon: FaUsers, color: "text-purple-600" },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6 sm:px-8 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
          Our Experience
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <li key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center space-y-2">
                <IconComponent className={`${stat.color} w-10 h-10`} />
                <p className="text-lg sm:text-xl font-semibold text-gray-800">{stat.value}</p>
                <p className="text-base sm:text-lg text-gray-700">{stat.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default StatisticsSection;
