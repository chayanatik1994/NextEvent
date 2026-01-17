import React from "react";

const GallerySection = () => {
  const images = [
    "https://i.ibb.co/rKYbQX0W/ritual-with-coconut-leaves-traditional-hindu-wedding-ceremony.jpg",
    "https://i.ibb.co/5xWWDdvt/front-view-beautiful-baby-shower-concept.jpg",
    "https://i.ibb.co/8gtgkJDT/group-three-business-people.jpg",
    "https://i.ibb.co/Y7QgQK85/outdoor-portrait-beautiful-woman.jpg",
    "https://i.ibb.co/5xWWDdvt/front-view-beautiful-baby-shower-concept.jpg",
    "https://i.ibb.co/8gtgkJDT/group-three-business-people.jpg",
    "https://i.ibb.co/Y7QgQK85/outdoor-portrait-beautiful-woman.jpg",
    "https://i.ibb.co/rKYbQX0W/ritual-with-coconut-leaves-traditional-hindu-wedding-ceremony.jpg"
  ];

  return (
    <section className="pt-0 pb-8 bg-gray-50 px-6 sm:px-8 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 -mt-8">
          Event Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <img
                src={img}
                alt={`Event Image ${index + 1}`}
                className="w-full h-40 sm:h-48 md:h-40 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
