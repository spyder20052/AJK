
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Image as ImageIcon, Briefcase, HeartHandshake, UserPlus } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' }
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Accueil | AJK - Association des Jeunes de Konney-Souazo</title>
        <meta name="description" content="Accueil du site de l'Association des Jeunes de Konney-Souazo (AJK). Unis pour notre village, ensemble pour notre avenir." />
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img  className="absolute inset-0 w-full h-full object-cover" alt="Village de Konney-Souazo" src="https://images.unsplash.com/photo-1691230842765-d4e0c009ed1b" />
          <motion.div 
            className="relative z-20 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Unis pour notre village,<br />ensemble pour notre avenir.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-beige/90">
              L'Association des Jeunes de Konney-Souazo (AJK) œuvre pour le développement et le bien-être de notre communauté.
            </p>
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <NavLink to="/a-propos">
                Découvrir l'association <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </motion.div>
        </section>

        {/* Sections Wrapper */}
        <div className="py-16 lg:py-24 space-y-16 lg:space-y-24 bg-beige">

          {/* Présentation Section */}
          <motion.section {...fadeIn} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-forest">Qui sommes-nous ?</h2>
                <p className="mt-4 text-lg text-brown">
                  L'AJK est une organisation à but non lucratif fondée par des jeunes engagés, déterminés à créer un impact positif durable à Konney-Souazo.
                </p>
                <p className="mt-4 text-brown">
                  Notre mission est de fédérer les énergies, de promouvoir l'éducation, l'entrepreneuriat et d'améliorer le cadre de vie pour tous les habitants.
                </p>
                <Button variant="outline" className="mt-6" asChild>
                  <NavLink to="/a-propos">En savoir plus</NavLink>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img  className="w-full h-full object-cover" alt="Jeunes de l'association en réunion" src="https://images.unsplash.com/photo-1669288848784-01195e1a25ad" />
              </div>
            </div>
          </motion.section>

          {/* Actualités Section */}
          <motion.section {...fadeIn} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-forest">Nos dernières actualités</h2>
              <p className="mt-2 text-lg text-brown max-w-2xl mx-auto">Suivez nos actions et les événements qui animent notre village.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Lancement du programme d\'alphabétisation', desc: 'Une nouvelle initiative pour renforcer l\'éducation de base pour tous.', date: '28 Juin 2025' },
                { title: 'Journée de reboisement communautaire', desc: 'Plus de 500 arbres plantés pour un environnement plus vert.', date: '15 Juin 2025' },
                { title: 'Inauguration du nouveau point d\'eau potable', desc: 'Un projet majeur pour améliorer l\'accès à l\'eau pour les familles.', date: '01 Juin 2025' },
              ].map((item, i) => (
                <Card key={i} className="bg-white hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="h-48 rounded-t-lg overflow-hidden -mx-6 -mt-6">
                      <img  className="w-full h-full object-cover" alt={item.title} src="https://images.unsplash.com/photo-1607212695733-c08334601aeb" />
                    </div>
                    <CardTitle className="pt-6 !text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brown text-sm">{item.desc}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs text-gray-500">{item.date}</span>
                      <NavLink to="/actualites" className="text-sm font-semibold text-forest hover:underline">
                        Lire plus <ArrowRight className="inline h-4 w-4" />
                      </NavLink>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Bureau Exécutif Section */}
          <motion.section {...fadeIn} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-forest">Notre bureau exécutif</h2>
              <p className="mt-2 text-lg text-brown max-w-2xl mx-auto">Le leadership qui guide nos actions avec passion et dévouement.</p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: 'Kouassi Jean', role: 'Président', img: 'Portrait de Kouassi Jean' },
                { name: 'Aya Cécile', role: 'Vice-Présidente', img: 'Portrait de Aya Cécile' },
                { name: 'N\'Guessan Paul', role: 'Secrétaire Général', img: 'Portrait de N\'Guessan Paul' },
                { name: 'Brou Adjoua', role: 'Trésorière Générale', img: 'Portrait de Brou Adjoua' },
              ].map((member, i) => (
                <div key={i} className="text-center">
                  <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden shadow-lg">
                    <img  className="w-full h-full object-cover" alt={member.img} src="https://images.unsplash.com/photo-1589132012505-a2d7a7a39589" />
                  </div>
                  <p className="mt-4 font-bold text-lg text-forest">{member.name}</p>
                  <p className="text-sm text-brown">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Médiathèque & Projets Section */}
          <motion.section {...fadeIn} className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-12">
               <div className="bg-white p-8 rounded-lg shadow-lg">
                  <Briefcase className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold text-forest">Nos Projets</h3>
                  <p className="mt-2 text-brown">De l'entrepreneuriat des jeunes à l'amélioration de notre cadre de vie, découvrez comment nous agissons concrètement.</p>
                  <Button variant="link" className="p-0 mt-4 text-forest" asChild>
                    <NavLink to="/projets">Voir nos projets <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
                  </Button>
               </div>
               <div className="bg-white p-8 rounded-lg shadow-lg">
                  <ImageIcon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold text-forest">Médiathèque</h3>
                  <p className="mt-2 text-brown">Revivez nos moments forts à travers nos photos, vidéos et publications. Une immersion au cœur de l'AJK.</p>
                  <Button variant="link" className="p-0 mt-4 text-forest" asChild>
                    <NavLink to="/mediatheque">Explorer la médiathèque <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
                  </Button>
               </div>
             </div>
          </motion.section>

          {/* Call To Action Section */}
          <motion.section {...fadeIn} className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-forest text-beige rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <UserPlus className="h-12 w-12 mx-auto md:mx-0 text-beige"/>
                  <h3 className="text-3xl font-bold mt-4">Devenez Membre</h3>
                  <p className="mt-2 text-beige/80">Rejoignez une communauté dynamique et contribuez activement au futur de Konney-Souazo.</p>
                  <Button variant="secondary" size="lg" className="mt-6" asChild>
                    <NavLink to="/devenir-membre">Nous rejoindre</NavLink>
                  </Button>
                </div>
                <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-beige/30 pt-8 md:pt-0 md:pl-8">
                  <HeartHandshake className="h-12 w-12 mx-auto md:mx-0 text-beige"/>
                  <h3 className="text-3xl font-bold mt-4">Faites un Don</h3>
                  <p className="mt-2 text-beige/80">Chaque contribution, petite ou grande, nous aide à financer nos projets et à réaliser nos ambitions.</p>
                  <Button variant="secondary" size="lg" className="mt-6" asChild>
                    <NavLink to="/faire-un-don">Soutenir nos actions</NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </main>
    </>
  );
};

export default Home;
  