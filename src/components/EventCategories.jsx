import React from "react";

export const EventCategories = () => {
  const categories = [
    { name: "Wedding", description: "Custom themes & full planning" },
    { name: "Birthday", description: "Fun-filled celebrations for all ages" },
    { name: "Engagement", description: "Elegant and memorable moments" },
    { name: "Corporate", description: "Professional and seamless events" },
    { name: "Baby Shower", description: "Beautiful and heartwarming parties" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Event Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center border-t-4 border-blue-700">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">{cat.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
