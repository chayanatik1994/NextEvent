import events from "@/data/events.json";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function EventDetail({ params }) {
  const { id } = await params;

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="p-8 max-w-3xl mx-auto text-center text-red-500 space-y-4">
        <p className="text-xl font-semibold">Event not found</p>
        <Link
          href="/events"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <FaArrowLeft className="mr-2" /> Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      {/* Event Image */}
      {event.image && (
        <div className="mx-auto w-full max-w-md h-64 sm:h-72 md:h-80 lg:h-80 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Event Details */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">{event.name}</h1>
        <p className="text-gray-700">
          <strong>Location:</strong> {event.location}
        </p>
        {event.price && (
          <p className="text-teal-600 font-semibold">
            <strong>Price:</strong> {event.price}
          </p>
        )}
        {event.description && (
          <p className="text-gray-700">{event.description}</p>
        )}
      </div>

      {/* Back Button */}
      <Link
        href="/events"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        <FaArrowLeft className="mr-2" /> Back to Events
      </Link>
    </div>
  );
}
