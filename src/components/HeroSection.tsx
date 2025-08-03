import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Bridging Cultures, Building Understanding
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          The Institute for Cultural Diplomacy is dedicated to promoting international understanding 
          and cooperation through cultural exchange, education, and dialogue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => navigate('/programs')}>Explore Our Programs
          </Button>
          <Button size="lg" variant="outline">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
