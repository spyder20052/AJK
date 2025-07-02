
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-forest" />
              </div>
              <div>
                <span className="text-lg font-bold">AJK</span>
                <p className="text-sm text-gray-300">Konney-Souazo</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Unis pour notre village, ensemble pour notre avenir. L'Association des Jeunes de Konney-Souazo œuvre pour le développement de notre communauté.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Navigation</span>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-smooth">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-white transition-smooth">À propos</Link></li>
              <li><Link to="/actualites" className="text-gray-300 hover:text-white transition-smooth">Actualités</Link></li>
              <li><Link to="/projets" className="text-gray-300 hover:text-white transition-smooth">Projets</Link></li>
              <li><Link to="/devenir-membre" className="text-gray-300 hover:text-white transition-smooth">Devenir membre</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact</span>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">Konney-Souazo, Burkina Faso</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">+226 XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">contact@ajk-konney.org</span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Suivez-nous</span>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Association des Jeunes de Konney-Souazo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
