
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Book, User, Video, Mail, Clock, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const QuickAccessCards = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-all hover:scale-105">
            <CardHeader>
              <Book className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Articles & Blogs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Read insights from our experts</p>
              <Button variant="outline" className="w-full" onClick={() => navigate('/articles')}>Browse Articles</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all hover:scale-105">
            <CardHeader>
              <Calendar className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Join our upcoming programs</p>
              <Button variant="outline" className="w-full" onClick={() => navigate('/events')}>View Events</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all hover:scale-105">
            <CardHeader>
              <Video className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Media Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Watch videos and listen to talks</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/media')}
              >
                Explore Media
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all hover:scale-105">
            <CardHeader>
              <User className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Get in touch with our team</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Contact Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-blue-600">Contact Information</DialogTitle>
                    <DialogDescription>
                      Get in touch with the Institute for Cultural Diplomacy
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <a href="tel:+2348033514961" className="text-blue-600 hover:underline">
                          +234 803 351 4961
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href="mailto:info@icdnigeria.org" className="text-blue-600 hover:underline">
                          info@icdnigeria.org
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Office Hours</p>
                        <p className="text-gray-600">Monday to Friday (9 am - 5 pm)</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessCards;
