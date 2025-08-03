
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Calendar, User } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Building Bridges Through Art",
      excerpt: "How artistic collaboration can foster international understanding and cooperation between diverse cultures worldwide.",
      author: "Prof. James Chen",
      date: "December 10, 2024",
      readTime: "7 min read",
      comments: 8,
      tags: ["Art", "Culture", "Collaboration"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 2,
      title: "Cultural Diplomacy in Post-Pandemic World",
      excerpt: "Adapting traditional diplomatic approaches to new global realities and emerging challenges in international relations.",
      author: "Dr. Maria Rodriguez",
      date: "December 5, 2024",
      readTime: "6 min read",
      comments: 15,
      tags: ["Pandemic", "Adaptation", "Global Relations"],
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    },
    {
      id: 3,
      title: "Youth Engagement in International Affairs",
      excerpt: "Empowering the next generation to participate in cultural diplomacy and global dialogue initiatives.",
      author: "Dr. Sarah Mitchell",
      date: "November 28, 2024",
      readTime: "4 min read",
      comments: 6,
      tags: ["Youth", "Engagement", "Education"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Articles & Insights</h1>
              <p className="text-gray-600 mt-2">Explore thought leadership in cultural diplomacy</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Write Article</Button>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input 
              placeholder="Search articles..." 
              className="flex-1"
            />
            <Button variant="outline">Filter by Tag</Button>
            <Button variant="outline">Sort by Date</Button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600">Featured</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {articles[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {articles[0].date}
                  </div>
                  <span>{articles[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                  {articles[0].title}
                </h2>
                <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {articles[0].tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <MessageSquare className="w-4 h-4" />
                      <span>{articles[0].comments}</span>
                    </div>
                    <Button>Read More</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription>{article.readTime}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MessageSquare className="w-4 h-4" />
                      <span>{article.comments}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">Read Article</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles and insights on cultural diplomacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
