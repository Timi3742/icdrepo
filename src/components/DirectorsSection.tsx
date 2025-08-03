
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DirectorsSection = () => {
  const directors = [
    {
      name: "Ambassador Dickson Osaigbovo Omoregie",
      position: "Country Director",
      image: "/icd-uploads/directors/icd-cd.png",
      bio: "Leading expert in international cultural exchange with more than 20 years of experience."
    },
    {
      name: "Dr. (Mrs.) Sarah Jubril",
      position: "Patron",
      image: "/icd-uploads/directors/sarah-jubril.png",
      bio: "Former Presidential Aspirant in 2019"
    },
    {
      name: "Dr. Oby Ebenezer ",
      position: "Director",
      image: "/icd-uploads/directors/oby-ebenezer.png",
      bio: "Specialist in International Relations."
    },
    {
      name: "Dr. Amina Hassan",
      position: "Deputy Director",
      image: "/icd-uploads/directors/amina-hassan.png",
      bio: "Expert in cross-cultural communication and diplomatic relations with extensive experience in international development."
    },
    {
      name: "Hajia Hadizat AAA Umoru",
      position: "National President CAPWAY-NGO",
      image: "/icd-uploads/directors/hajia-hadiza.png",
      bio: "National President of CAPWAY-NGO, dedicated to women's empowerment and community development."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {directors.map((director, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{director.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {director.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{director.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
