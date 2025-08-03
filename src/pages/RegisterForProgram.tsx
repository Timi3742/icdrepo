import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from 'react-router-dom';

const programs = [
  {
    id: 1,
    title: "Certificate In Cultural Diplomacy And Global Citizenship",
    description: "Learn about the principles and practices of cultural diplomacy",
    duration: "6 months",
    fee: "$3,350",
  },
  {
    id: 2,
    title: "Certificate In International Communication And Negotiation",
    description: "Study the fundamentals of international relations and diplomacy",
    duration: "1 year",
    fee: "$6,000 per year",
  },
  {
    id: 3,
    title: "Certificate In Diplomatic Protocol And Etiquette",
    description: "Develop your skills in cross-cultural communication",
    duration: "3 days",
    fee: "$2,290",
  },
  {
    id: 4,
    title: "Diploma In Arts and Cultural Management",
    description: "Study the fundamental elements of how to manage Arts and Culture",
    duration: "6 months",
    fee: "$3,000",
  },
  {
    id: 5,
    title: "Certificate In Peace Building And Conflict Resolution",
    description: "Acquire the solid skills needed in peace building and resolving conflicts",
    duration: "6 months",
    fee: "$3,800",
  },
  {
    id: 6,
    title: "Diploma In Digital Diplomacy And Social Media Communication",
    description: "Get equipped with digital skills in Diplomacy and effective communication on social media",
    duration: "6 months",
    fee: "$2,800",
  },
  {
    id: 7,
    title: "Certificate In Cultural Heritage Preservation",
    description: "Learn the principles and practices of preserving cultural heritage",
    duration: "3 months",
    fee: "$2,350",
  },
];

const RegisterForProgram = () => {
  const { programId } = useParams();
  const program = programs.find((p) => p.id === parseInt(programId));

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', {
      fullName,
      email,
      program: program.title,
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Register for {program.title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
              <Input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register for {program.title}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForProgram;
