
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Projets', href: '/projets' },
    { name: 'Médiathèque', href: '/mediatheque' },
    { name: 'Devenir membre', href: '/devenir-membre' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-forest">AJK</h1>
              <p className="text-xs text-soft-brown">Konney-Souazo</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? 'text-forest border-b-2 border-forest'
                    : 'text-gray-700 hover:text-forest'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/faire-un-don">
              <Button className="bg-forest hover:bg-accent-green text-white">
                <Heart className="w-4 h-4 mr-2" />
                Faire un don
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-forest hover:bg-gray-100 transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base font-medium transition-smooth ${
                    isActive(item.href)
                      ? 'text-forest'
                      : 'text-gray-700 hover:text-forest'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/faire-un-don" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-forest hover:bg-accent-green text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Faire un don
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
