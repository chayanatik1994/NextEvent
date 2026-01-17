// "use client";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const ItemsPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     if (!isLoggedIn) {
//       router.push("/login"); 
//     }
//   }, [router]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
//       <h1 className="text-3xl font-bold text-gray-900 mb-4">Items / Lists Page</h1>
//       <p className="text-gray-700 text-lg">You are now logged in!</p>
//     </div>
//   );
// };

// export default ItemsPage;
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import eventsData from "@/data/events.json";

// Vibrant gradient colors for cards
const cardGradients = [
  "from-pink-300 to-pink-500",
  "from-indigo-300 to-indigo-500",
  "from-green-300 to-green-500",
  "from-yellow-300 to-yellow-500",
];

const ItemsPage = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setItems(eventsData);
  }, [router]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Upcoming Events
        </h1>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>

        {/* Event Cards */}
        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-500">No events found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col w-64 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
                style={{
                  background: `linear-gradient(135deg, ${
                    cardGradients[index % cardGradients.length].split(" ")[0]
                  }, ${
                    cardGradients[index % cardGradients.length].split(" ")[2]
                  })`,
                }}
              >
                {/* Image */}
                <figure className="h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </figure>

                {/* Card Body */}
                <div className="p-4 flex flex-col flex-1 text-black">
                  {/* Name */}
                  <h2 className="font-bold text-lg mb-2">{item.name}</h2>

                  {/* Organizer */}
                  <p className="text-sm mb-1">
                    <span className="font-semibold">Organizer:</span> {item.organizer}
                  </p>

                  {/* Capacity */}
                  <p className="text-sm mb-1">
                    <span className="font-semibold">Capacity:</span> {item.capacity}
                  </p>

                  {/* Price */}
                  <p className="text-sm mb-3">
                    <span className="font-semibold">Price:</span> {item.price}
                  </p>

                  {/* Details Button */}
                  <button
                    className="w-full py-2 text-white font-bold rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
                    style={{
                      background: "linear-gradient(to right, #14b8a6, #0d9488)",
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;


