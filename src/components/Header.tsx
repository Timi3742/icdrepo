
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/icd-uploads/icdlogo.png" 
                alt="Institute for Cultural Diplomacy Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Institute for Cultural Diplomacy</h1>
              <p className="text-sm text-gray-600">Fostering Global Understanding</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/articles" className="text-gray-700 hover:text-blue-600 transition-colors">Articles</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors">Events</Link>
            <Link to="/media" className="text-gray-700 hover:text-blue-600 transition-colors">Media</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">Register</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
