"use client";

import Image from "next/image";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Event Image */}
      {event.image && (
        <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover"
            unoptimized 
          />
        </div>
      )}

      {/* Event Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-1 text-gray-900">{event.name}</h3>
        {event.location && <p className="text-gray-500 text-sm mb-2">{event.location}</p>}
        {event.price && <p className="text-teal-600 font-semibold text-sm mb-4">{event.price}</p>}

        <a
          href={`/events/${event.id}`}
          className="mt-auto text-center py-2 px-4 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm font-medium"
        >
          Details
        </a>
      </div>
    </div>
  );
}
