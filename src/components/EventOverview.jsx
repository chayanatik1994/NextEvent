import EventCard from "@/components/EventCard";
import events from "@/data/events.json";

export default function EventOverview() {
  return (
    <section className="-mt-8 bg-gray-50 relative z-10 rounded-t-3xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Upcoming Events</h2>
          <p className="text-gray-600 max-w-xl">
            Explore and register for exciting events happening near you.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
