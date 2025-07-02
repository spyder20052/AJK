
    import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest text-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-2">
               <img  className="h-10 w-auto bg-beige rounded-full p-1" alt="AJK Logo" src="https://images.unsplash.com/photo-1644256536238-c50d50118af7" />
              <span className="font-bold text-xl text-beige">AJK</span>
            </NavLink>
            <p className="text-sm text-beige/80">
              Association des Jeunes de Konney-Souazo. Unis pour notre village, ensemble pour notre avenir.
            </p>
          </div>
          
          <div>
            <p className="font-semibold text-beige tracking-wider uppercase">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><NavLink to="/a-propos" className="text-beige/80 hover:text-beige">À propos</NavLink></li>
              <li><NavLink to="/actualites" className="text-beige/80 hover:text-beige">Actualités</NavLink></li>
              <li><NavLink to="/projets" className="text-beige/80 hover:text-beige">Projets</NavLink></li>
              <li><NavLink to="/contact" className="text-beige/80 hover:text-beige">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-beige tracking-wider uppercase">Nous rejoindre</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><NavLink to="/devenir-membre" className="text-beige/80 hover:text-beige">Devenir Membre</NavLink></li>
              <li><NavLink to="/faire-un-don" className="text-beige/80 hover:text-beige">Faire un Don</NavLink></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-beige tracking-wider uppercase">Suivez-nous</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-beige/80 hover:text-beige"><Facebook size={20} /></a>
              <a href="#" className="text-beige/80 hover:text-beige"><Twitter size={20} /></a>
              <a href="#" className="text-beige/80 hover:text-beige"><Instagram size={20} /></a>
              <a href="#" className="text-beige/80 hover:text-beige"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-beige/20 pt-8 text-center text-sm text-beige/60">
          <p>&copy; {new Date().getFullYear()} Association des Jeunes de Konney-Souazo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  