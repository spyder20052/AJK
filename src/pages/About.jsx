
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Calendar, Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const About = () => {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
    });
  };

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Solidarité",
      description: "Nous croyons en la force de l'union et de l'entraide communautaire pour surmonter les défis."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos projets et actions pour maximiser notre impact."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Engagement",
      description: "Notre dévouement envers notre communauté guide chacune de nos décisions et actions."
    }
  ];

  const fullBoard = [
    { name: "Amadou TRAORE", position: "Président", image: "Portrait professionnel d'un jeune homme africain souriant" },
    { name: "Fatima OUEDRAOGO", position: "Vice-Présidente", image: "Portrait professionnel d'une jeune femme africaine souriante" },
    { name: "Ibrahim SAWADOGO", position: "Secrétaire Général", image: "Portrait professionnel d'un jeune homme africain en costume" },
    { name: "Mariam KONE", position: "Trésorière", image: "Portrait professionnel d'une jeune femme africaine professionnelle" },
    { name: "Boukary OUATTARA", position: "Secrétaire Adjoint", image: "Portrait professionnel d'un jeune homme africain" },
    { name: "Aïcha SANKARA", position: "Trésorière Adjointe", image: "Portrait professionnel d'une jeune femme africaine" },
    { name: "Moussa ZONGO", position: "Commissaire aux Comptes", image: "Portrait professionnel d'un homme africain mature" },
    { name: "Salimata BARRY", position: "Responsable Communication", image: "Portrait professionnel d'une jeune femme africaine moderne" }
  ];

  const upcomingEvents = [
    {
      date: "25 Jan 2025",
      title: "Formation en entrepreneuriat agricole",
      description: "Session de formation pour les jeunes intéressés par l'agriculture moderne"
    },
    {
      date: "15 Fév 2025",
      title: "Assemblée générale ordinaire",
      description: "Réunion annuelle de tous les membres de l'association"
    },
    {
      date: "10 Mar 2025",
      title: "Journée de reboisement",
      description: "Action communautaire de plantation d'arbres dans le village"
    }
  ];

  return (
    <>
      <Helmet>
        <title>À propos - Association des Jeunes de Konney-Souazo (AJK)</title>
        <meta name="description" content="Découvrez l'histoire, la mission, la vision et les valeurs de l'Association des Jeunes de Konney-Souazo. Rencontrez notre équipe dirigeante." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-forest text-white">
        <div className="absolute inset-0 opacity-20">
          <img  
            className="w-full h-full object-cover" 
            alt="Village de Konney-Souazo"
           src="https://images.unsplash.com/photo-1689239404320-1f8ff60672e4" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            À propos de l'AJK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Découvrez notre histoire, notre mission et notre vision pour l'avenir de Konney-Souazo
          </motion.p>
        </div>
      </section>

      {/* Présentation détaillée */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-forest mb-6">Notre histoire</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                L'Association des Jeunes de Konney-Souazo (AJK) a été créée en 2018 par un groupe 
                de jeunes passionnés et déterminés à contribuer au développement de leur village natal. 
                Face aux défis socio-économiques de notre communauté, nous avons décidé de nous unir 
                pour apporter des solutions concrètes et durables.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Depuis notre création, nous avons mené de nombreux projets dans les domaines de 
                l'entrepreneuriat, de l'éducation, de la santé et de l'amélioration du cadre de vie. 
                Notre approche participative implique tous les membres de la communauté dans la 
                conception et la mise en œuvre de nos initiatives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Aujourd'hui, l'AJK compte plus de 150 membres actifs et continue de grandir, 
                portée par la vision d'un Konney-Souazo prospère et autonome.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-soft" 
                alt="Fondateurs de l'AJK"
               src="https://images.unsplash.com/photo-1663600260962-afc05d12884e" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Valeurs */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              Vision, Mission & Valeurs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-soft text-center"
            >
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-forest mb-4">Notre Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Faire de Konney-Souazo un village modèle de développement durable, 
                où chaque jeune a les moyens de réaliser son potentiel et de contribuer 
                à la prospérité collective.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-soft text-center"
            >
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-forest mb-4">Notre Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Promouvoir l'entrepreneuriat des jeunes, améliorer le cadre de vie 
                et renforcer la cohésion sociale à travers des projets innovants 
                et participatifs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-soft text-center"
            >
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-forest mb-4">Nos Valeurs</h3>
              <p className="text-gray-700 leading-relaxed">
                Solidarité, transparence, innovation et respect de l'environnement 
                guident toutes nos actions et décisions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-soft-brown rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-forest mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bureau complet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              Notre bureau exécutif
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une équipe expérimentée et dévouée au service de notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fullBoard.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-cream p-6 rounded-lg"
              >
                <img  
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-soft" 
                  alt={`Portrait de ${member.name}`}
                 src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                <h3 className="text-lg font-semibold text-forest mb-1">
                  {member.name}
                </h3>
                <p className="text-soft-brown text-sm">
                  {member.position}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-forest mb-6">Agenda des événements</h2>
              <p className="text-lg text-gray-700 mb-8">
                Découvrez nos prochains événements et activités. Rejoignez-nous pour 
                participer au développement de notre communauté.
              </p>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-soft border-l-4 border-forest"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-forest rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-soft-brown font-medium mb-1">
                          {event.date}
                        </div>
                        <h3 className="text-lg font-semibold text-forest mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-soft">
                <h3 className="text-2xl font-bold text-forest mb-6">Nos statuts</h3>
                <p className="text-gray-700 mb-6">
                  Consultez les statuts officiels de l'Association des Jeunes de Konney-Souazo 
                  pour mieux comprendre notre organisation et nos règles de fonctionnement.
                </p>
                <Button 
                  onClick={handleFeatureClick}
                  className="bg-forest hover:bg-accent-green w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger les statuts (PDF)
                </Button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-soft">
                <h3 className="text-2xl font-bold text-forest mb-6">Rapport d'activités</h3>
                <p className="text-gray-700 mb-6">
                  Découvrez notre rapport d'activités 2024 qui présente en détail 
                  nos réalisations et nos perspectives d'avenir.
                </p>
                <Button 
                  onClick={handleFeatureClick}
                  variant="outline" 
                  className="border-forest text-forest hover:bg-forest hover:text-white w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le rapport 2024
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
