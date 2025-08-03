import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Users, Globe, Shield, Award, Handshake } from "lucide-react";

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      title: "ICD International Summit on Peace and Cultural Diplomacy",
      date: "August 15-20, 2025",
      location: "Abuja International Conference Centre",
      description: "A prestigious international summit bringing together world leaders, diplomats, and cultural ambassadors to discuss peace-building through cultural diplomacy.",
      hasDetails: true
    }
  ];

  const summitBenefits = [
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Unity and Peace",
      description: "The summit will contribute to fostering unity among diverse cultural and ethnic groups within Nigeria, promoting a sense of belonging and reducing tensions, reinforce its soft power, and strengthen its diplomatic ties with other countries."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cultural Exchange",
      description: "By showcasing Nigeria's cultural richness, the summit will attract international attention and create opportunities for cultural exchange, tourism, and economic growth."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Hosting an international summit on peace and cultural diplomacy will enhance Nigeria's global image as a hub for fostering international relations positioning it as a leader in promoting intercultural dialogue and understanding."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Addressing Security Challenges",
      description: "Examine the impact of cultural diversity on security challenges within Nigeria and explore solutions to mitigate conflicts and promote social cohesion."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Problem Solving",
      description: "Embraces multilateralism and collaborative problem solving, making Nigeria a trusted and respected member of the global community."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Upcoming Events</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {event.date} • {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                {event.hasDetails ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-blue-600 mb-2">
                          ICD International Summit on Peace and Cultural Diplomacy
                        </DialogTitle>
                        <DialogDescription className="text-lg">
                          Benefits to Nigeria and the International Community
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6">
                        <div className="grid gap-6">
                          {summitBenefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                              <div className="text-blue-600 mt-1">
                                {benefit.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                                <p className="text-gray-700">{benefit.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            Distinguished Participants
                          </h4>
                          <p className="text-gray-700">
                            The ICD has perfected arrangements to bring approximately Ten (10) former prime ministers, 
                            twenty (20) top government officials, and business leaders from around the world, to participate 
                            as speakers and panelists at the event. Their presence will undoubtedly bring a wealth of knowledge, 
                            experience, and global perspectives and acceptance to the summit, making it a truly unique and impactful event.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button variant="outline" size="sm">Learn More</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
