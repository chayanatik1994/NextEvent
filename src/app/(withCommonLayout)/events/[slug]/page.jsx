// // src/app/(withCommonLayout)/events/[slug]/page.jsx
// import React from 'react';

// export default function EventPage({ params }) {
//   const { slug } = params;

//   return (
//     <main className="bg-gray-50 min-h-screen px-6 py-16">
//       <h1 className="text-4xl font-bold mb-6 text-center">{slug} Event</h1>
//       <p className="text-lg text-gray-700 text-center mb-12">
//         Details and information about the {slug} event.
//       </p>

//       {/* Add more sections/components specific to this event */}
//     </main>
//   );
// }
import events from "@/data/events.json";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function EventPage({ params }) {
  const { slug } = params;

  // Convert id to string to match slug from URL
  const event = events.find((e) => e.id.toString() === slug);

  if (!event) {
    notFound(); // 404 page if event not found
  }

  return (
    <main className="bg-gray-50 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Event Image */}
        <div className="relative h-64 w-full">
          <Image
            src={event.image}       // Ensure event.image path is correct (e.g., /images/event1.jpg)
            alt={event.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Event Details */}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
          <p className="text-gray-600 mb-6">{event.description}</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t pt-6 gap-4">
            <span className="text-2xl font-semibold text-teal-600">
              {event.price}
            </span>

            <button className="px-6 py-3 rounded-lg text-white font-semibold bg-teal-600 hover:bg-teal-700 transition">
              Register
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
