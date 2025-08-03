import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Calendar, Clock, Download } from "lucide-react";

const Media = () => {
  const videos = [
    {
      id: 1,
      title: "Country Director Interview",
      description: "Exclusive interview with the Country Director discussing the Institute's mission, vision, and future initiatives for cultural diplomacy in Nigeria.",
      duration: "Interview",
      date: "December 15, 2024",
      views: "New",
      thumbnail: "https://img.youtube.com/vi/5KIbvgZ8om8/maxresdefault.jpg",
      category: "Interview",
      youtubeId: "5KIbvgZ8om8"
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "Conversations in Cultural Diplomacy #15",
      description: "Exploring the role of education in fostering international understanding with Prof. James Chen.",
      duration: "28:45",
      date: "December 5, 2024",
      downloads: "1.2K",
      category: "Interview"
    },
    {
      id: 2,
      title: "Diplomatic Insights #23",
      description: "Dr. Maria Rodriguez on Latin American cultural initiatives and their global impact.",
      duration: "35:20",
      date: "November 20, 2024",
      downloads: "950",
      category: "Deep Dive"
    },
    {
      id: 3,
      title: "Global Perspectives #8",
      description: "A roundtable discussion on post-pandemic diplomatic strategies and cultural adaptation.",
      duration: "42:30",
      date: "November 8, 2024",
      downloads: "1.5K",
      category: "Roundtable"
    }
  ];

  const eventRecordings = [
    {
      id: 1,
      title: "International Cultural Forum 2024 - Opening Ceremony",
      description: "Complete recording of the opening ceremony featuring keynote addresses from world leaders.",
      duration: "2:15:30",
      date: "March 15, 2024",
      event: "International Cultural Forum",
      type: "Full Event"
    },
    {
      id: 2,
      title: "Digital Diplomacy Workshop - Session 1",
      description: "Introduction to digital tools and platforms for modern cultural diplomacy.",
      duration: "1:30:45",
      date: "February 20, 2024",
      event: "Digital Diplomacy Workshop",
      type: "Workshop Session"
    }
  ];

  const handleVideoClick = (video: any) => {
    if (video.youtubeId) {
      window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Media Gallery</h1>
              <p className="text-gray-600 mt-2">Watch videos, listen to podcasts, and access event recordings</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Upload Media</Button>
          </div>
        </div>
      </header>

      {/* Content Tabs */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="podcasts">Audio/Podcasts</TabsTrigger>
              <TabsTrigger value="events">Event Recordings</TabsTrigger>
            </TabsList>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div 
                        className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => handleVideoClick(video)}
                      >
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-blue-600">{video.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer">
                        {video.title}
                      </CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {video.date}
                          </div>
                          <span>{video.views} views</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">{video.description}</p>
                      <Button 
                        className="w-full" 
                        onClick={() => handleVideoClick(video)}
                      >
                        {video.youtubeId ? 'Watch on YouTube' : 'Watch Now'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Podcasts Tab */}
            <TabsContent value="podcasts">
              <div className="space-y-6">
                {podcasts.map((podcast) => (
                  <Card key={podcast.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{podcast.category}</Badge>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Clock className="w-3 h-3" />
                              {podcast.duration}
                            </div>
                          </div>
                          <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer mb-2">
                            {podcast.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {podcast.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              {podcast.downloads} downloads
                            </div>
                          </CardDescription>
                        </div>
                        <Button size="sm" className="ml-4">Listen</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{podcast.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Event Recordings Tab */}
            <TabsContent value="events">
              <div className="space-y-6">
                {eventRecordings.map((recording) => (
                  <Card key={recording.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{recording.type}</Badge>
                            <Badge variant="outline">{recording.event}</Badge>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Clock className="w-3 h-3" />
                              {recording.duration}
                            </div>
                          </div>
                          <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer mb-2">
                            {recording.title}
                          </CardTitle>
                          <CardDescription>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {recording.date}
                            </div>
                          </CardDescription>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="outline">Download</Button>
                          <Button size="sm">Watch</Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{recording.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Content</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't miss our latest featured videos and podcasts covering the most important topics in cultural diplomacy.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src="https://img.youtube.com/vi/5KIbvgZ8om8/maxresdefault.jpg"
                  alt="Featured Video"
                  className="w-full h-48 object-cover"
                />
                <div 
                  className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
                  onClick={() => window.open('https://www.youtube.com/watch?v=5KIbvgZ8om8', '_blank')}
                >
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Country Director Interview</h4>
                <p className="text-gray-600 mb-4">Exclusive interview with our Country Director on the Institute's mission and initiatives.</p>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://www.youtube.com/watch?v=5KIbvgZ8om8', '_blank')}
                >
                  Watch on YouTube
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Latest Podcast Episode</h4>
                <p className="text-gray-600 mb-4">In-depth conversation with leading experts on emerging diplomatic trends.</p>
                <Button variant="outline" className="w-full">Listen Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
