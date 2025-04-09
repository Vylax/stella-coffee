import BookingIntegration from "@/components/BookingIntegration";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Workshops & Events | Bakery Bliss Café",
  description: "Join our workshops or attend special events at Bakery Bliss Café. Learn new skills and enjoy unique experiences.",
};

// Sample data structure for events (replace with actual data fetching later)
const sampleEvents = [
  {
    id: 1,
    title: "Basque Cheesecake Workshop",
    date: "Saturday, May 25th, 2024",
    time: "2:00 PM - 4:00 PM",
    description: "Learn the secrets to making the perfect burnt Basque cheesecake from scratch.",
    price: "$75",
    spotsLeft: 5,
  },
  {
    id: 2,
    title: "Artisan Coffee Brewing Masterclass",
    date: "Sunday, June 9th, 2024",
    time: "10:00 AM - 12:00 PM",
    description: "Explore different brewing methods and taste exceptional single-origin coffees.",
    price: "$50",
    spotsLeft: 0, // Example of a sold-out event
  },
  // Add more sample events
];

export default function WorkshopsEventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brand-green mb-8 text-center">Workshops & Events</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {sampleEvents.length > 0 ? (
          sampleEvents.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row gap-6">
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{event.title}</h2>
                <p className="text-gray-700 mb-1"><span className="font-medium">Date:</span> {event.date}</p>
                <p className="text-gray-700 mb-3"><span className="font-medium">Time:</span> {event.time}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
              </div>
              <div className="md:w-1/4 flex flex-col items-start md:items-end justify-between">
                <p className="text-xl font-bold text-brand-green mb-2">{event.price}</p>
                {event.spotsLeft > 0 ? (
                  <>
                    <p className="text-sm text-gray-700 mb-2">{event.spotsLeft} spots left</p>
                    <BookingIntegration eventId={event.id} />
                  </>
                ) : (
                  <p className="text-red-600 font-semibold">Sold Out</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-brand-brown">Check back soon for upcoming workshops and events!</p>
        )}
      </div>
    </div>
  );
} 