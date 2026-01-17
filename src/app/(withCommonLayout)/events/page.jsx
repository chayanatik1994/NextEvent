import EventCard from "@/components/EventCard";
import events from "@/data/events.json";
import Link from "next/link";

export default function EventsPage() {
  return (
    <section className="py-14">
      <h1 className="text-3xl font-bold mb-10 text-center">All Events</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <a>
              <EventCard event={event} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
