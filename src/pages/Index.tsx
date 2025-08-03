
import Slideshow from "@/components/Slideshow";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DirectorsSection from "@/components/DirectorsSection";
import QuickAccessCards from "@/components/QuickAccessCards";
import RecentArticles from "@/components/RecentArticles";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";

const Index = () => {
  const slideshowData = [
    {
      id: 1,
      image: "/icd-uploads/slides/slide1.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "Building Cultural Bridges",
      description: "Connecting communities across the globe through shared understanding and meaningful dialogue."
    },
    {
      id: 2,
      image: "/icd-uploads/slides/slide2.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "Celebrating Diversity",
      description: "Embracing the rich tapestry of cultures that make our world beautiful and interconnected."
    },
    {
      id: 3,
      image: "/icd-uploads/slides/slide3.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      title: "Future of Diplomacy",
      description: "Pioneering innovative approaches to international relations and cultural exchange."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Dynamic Slideshow Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Slideshow 
            slides={slideshowData} 
            autoPlay={true} 
            interval={4000}
            className="shadow-lg"
          />
        </div>
      </section>

      <HeroSection />
      <DirectorsSection />
      <QuickAccessCards />
      <RecentArticles />
      <UpcomingEvents />
      <Footer />
    </div>
  );
};

export default Index;
