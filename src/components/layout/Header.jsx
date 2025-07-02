
    import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Actualités', path: '/actualites' },
  { name: 'Projets', path: '/projets' },
  { name: 'Médiathèque', path: '/mediatheque' },
  { name: 'Devenir membre', path: '/devenir-membre' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: '0%' },
  };

  return (
    <header className="bg-beige/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <img  className="h-10 w-auto" alt="AJK Logo" src="https://images.unsplash.com/photo-1513090430293-4a7e8f25b791" />
              <span className="font-bold text-xl text-forest">AJK</span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-forest' : 'text-gray-600 hover:text-forest'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:block">
            <Button asChild>
              <NavLink to="/faire-un-don">
                <HeartHandshake className="mr-2 h-4 w-4" /> Faire un don
              </NavLink>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-forest focus:outline-none">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-0 right-0 w-full h-full bg-beige z-50 p-6"
          >
            <div className="flex justify-between items-center mb-8">
               <NavLink to="/" className="flex items-center space-x-2" onClick={toggleMenu}>
                <img  className="h-10 w-auto" alt="AJK Logo" src="https://images.unsplash.com/photo-1513090430293-4a7e8f25b791" />
                <span className="font-bold text-xl text-forest">AJK</span>
              </NavLink>
              <button onClick={toggleMenu} className="text-forest focus:outline-none">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `text-lg font-medium ${
                      isActive ? 'text-forest' : 'text-gray-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button asChild size="lg" className="mt-6">
                <NavLink to="/faire-un-don" onClick={toggleMenu}>
                  <HeartHandshake className="mr-2 h-5 w-5" /> Faire un don
                </NavLink>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
  