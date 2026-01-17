import Image from "next/image";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
      
      {/* Event Image */}
      {event.image && (
        <div className="relative h-48 w-full">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Event Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{event.name}</h3>
        {event.location && <p className="text-gray-500 mb-2">{event.location}</p>}
        {event.price && <p className="text-teal-600 font-semibold mb-4">{event.price}</p>}

        <a
          href={`/events/${event.id}`}
          className="mt-auto text-center py-2 px-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium text-sm"
        >
          Details
        </a>
      </div>
    </div>
  );
}
