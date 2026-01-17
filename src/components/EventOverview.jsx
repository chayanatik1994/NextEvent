import EventCard from "@/components/EventCard";
import events from "@/data/events.json"; 

export default function EventOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">All Events</h2>
          <span className="text-gray-500 font-medium">View all</span>
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
