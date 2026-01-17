import React from "react";
import { FaRegGem, FaStar, FaCrown, FaLeaf, FaHeart, FaMagic } from "react-icons/fa";

export const PackagesSection = () => {
  const packages = [
    { name: "Silver", price: "$100", icon: FaRegGem, color: "text-gray-500" },
    { name: "Gold", price: "$200", icon: FaStar, color: "text-yellow-500" },
    { name: "Platinum", price: "$300", icon: FaCrown, color: "text-purple-600" },
    { name: "Emerald", price: "$400", icon: FaLeaf, color: "text-green-600" },
    { name: "Ruby", price: "$500", icon: FaHeart, color: "text-red-500" },
    { name: "Diamond", price: "$600", icon: FaMagic, color: "text-blue-600" },
    { name: "Signature", price: "$500", icon: FaHeart, color: "text-green-500" },
    { name: "Ultimate", price: "$600", icon: FaMagic, color: "text-purple-600" },
  ];

  return (
    <section className=" bg-gray-50 px-6 sm:px-8 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
          Event Packages
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <li key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center space-y-2">
                <IconComponent className={`${pkg.color} w-10 h-10`} />
                <span className="text-lg font-semibold text-gray-800">{pkg.name}</span>
                <span className="text-base text-gray-600 font-medium">{pkg.price}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default PackagesSection;
