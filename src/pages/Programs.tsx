
import { Link } from 'react-router-dom';

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

const Programs = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Programs</h2>
        <p className="text-gray-700 mb-8">
          The Institute for Cultural Diplomacy Nigeria, (ICD), in conjunction with our affiliate partners and institutions offer the following programs. On completion of these courses within the stated durations, Diploma Certificates and/or Certificate of Participation are awarded to participants. These certificates are recognized globally and ultimately create opportunities for both local and international engagements.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <p className="text-gray-700 mb-4">Duration: {program.duration}</p>
              <p className="text-gray-700 mb-4">Fee: {program.fee}</p>
              <Link to={`/register-for-program/${program.id}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
