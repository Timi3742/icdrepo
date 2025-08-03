
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "International Cultural Forum 2025",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Washington D.C., USA",
      type: "Conference",
      description: "Annual gathering of cultural diplomacy experts, practitioners, and students from around the world to discuss emerging trends and challenges.",
      attendees: 500,
      status: "Open",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 2,
      title: "Youth Ambassador Program Launch",
      date: "February 1, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      type: "Workshop",
      description: "Introducing the next generation of cultural diplomats through our comprehensive youth ambassador program.",
      attendees: 100,
      status: "Registration Open",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 3,
      title: "Digital Diplomacy Workshop",
      date: "January 20, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "New York, USA",
      type: "Workshop",
      description: "Hands-on workshop exploring digital tools and platforms for effective cultural diplomacy in the modern era.",
      attendees: 50,
      status: "Almost Full",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Cultural Exchange Symposium",
      date: "November 15, 2024",
      location: "London, UK",
      type: "Symposium",
      description: "Exploring successful cultural exchange programs and their impact on international relations.",
      attendees: 300,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 5,
      title: "Art as Diplomacy Exhibition",
      date: "October 10, 2024",
      location: "Paris, France",
      type: "Exhibition",
      description: "A unique exhibition showcasing how art serves as a bridge between cultures and nations.",
      attendees: 800,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-500";
      case "Registration Open":
        return "bg-blue-500";
      case "Almost Full":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Events & Programs</h1>
              <p className="text-gray-600 mt-2">Join our community events and educational programs</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Create Event</Button>
          </div>
        </div>
      </header>

      {/* Upcoming Events */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">{event.type}</Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="flex gap-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">Register Now</Button>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{event.type}</Badge>
                  <CardTitle className="hover:text-blue-600 transition-colors cursor-pointer">
                    {event.title}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attended</span>
                    </div>
                    <Button variant="outline">View Summary</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss an Event</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our event calendar to stay updated on all upcoming programs, workshops, and conferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe to Calendar</Button>
            <Button variant="outline">Create Account</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
