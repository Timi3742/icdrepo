import { Link } from "react-router-dom";
import { Mail, Clock, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ICD</span>
              </div>
              <span className="font-bold">Institute for Cultural Diplomacy</span>
            </div>
            <p className="text-gray-400">
              Fostering global understanding through cultural exchange and dialogue.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/research" className="hover:text-white transition-colors">Research</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/articles" className="hover:text-white transition-colors">Articles</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/media" className="hover:text-white transition-colors">Media</Link></li>
              <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
              <li><Link to="/social" className="hover:text-white transition-colors">Social Media</Link></li>
              <li><Link to="/partnerships" className="hover:text-white transition-colors">Partnerships</Link></li>
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <h5 className="font-semibold mb-3 text-white">Contact Us</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+2348033514961" className="hover:text-white transition-colors">
                    +234 803 351 4961
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@icdnigeria.org" className="hover:text-white transition-colors">
                    info@icdnigeria.org
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Monday to Friday (9 am - 5 pm)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Institute for Cultural Diplomacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
