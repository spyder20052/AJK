
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Home, Users, Target, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
    });
  };

  const projectCategories = [
    {
      id: 'entrepreneurship',
      title: 'Entrepreneuriat des jeunes',
      description: 'Accompagnement et formation des jeunes entrepreneurs',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'bg-forest',
      projects: [
        {
          title: "Programme de formation entrepreneuriale",
          description: "Formation de 50 jeunes aux techniques de création et gestion d'entreprise",
          status: "En cours",
          duration: "6 mois",
          beneficiaries: "50 jeunes",
          image: "Jeunes africains en formation entrepreneuriale dans une salle moderne avec ordinateurs"
        },
        {
          title: "Fonds de micro-crédit",
          description: "Création d'un fonds pour financer les projets des jeunes entrepreneurs",
          status: "Planifié",
          duration: "12 mois",
          beneficiaries: "30 entrepreneurs",
          image: "Réunion de micro-crédit avec des jeunes entrepreneurs africains et un conseiller financier"
        },
        {
          title: "Incubateur d'entreprises",
          description: "Espace de co-working et d'accompagnement pour les startups locales",
          status: "En développement",
          duration: "18 mois",
          beneficiaries: "20 startups",
          image: "Espace de co-working moderne avec des jeunes entrepreneurs africains travaillant"
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Amélioration du cadre de vie',
      description: 'Projets d\'infrastructure et d\'amélioration de l\'environnement',
      icon: <Home className="w-8 h-8" />,
      color: 'bg-soft-brown',
      projects: [
        {
          title: "Amélioration de l'accès à l'eau potable",
          description: "Installation de nouveaux forages et réhabilitation des points d'eau existants",
          status: "Terminé",
          duration: "4 mois",
          beneficiaries: "1200 habitants",
          image: "Nouveau forage d'eau potable dans un village africain avec des villageois qui collectent l'eau"
        },
        {
          title: "Électrification solaire",
          description: "Installation de panneaux solaires pour l'éclairage public et les équipements communautaires",
          status: "En cours",
          duration: "8 mois",
          beneficiaries: "Tout le village",
          image: "Installation de panneaux solaires dans un village africain avec des techniciens au travail"
        },
        {
          title: "Aménagement des voies d'accès",
          description: "Réhabilitation et création de nouvelles routes pour améliorer la mobilité",
          status: "Planifié",
          duration: "10 mois",
          beneficiaries: "Toute la communauté",
          image: "Construction de route dans un village africain avec des ouvriers et des machines"
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Terminé':
        return 'bg-green-100 text-green-800';
      case 'En cours':
        return 'bg-blue-100 text-blue-800';
      case 'Planifié':
        return 'bg-yellow-100 text-yellow-800';
      case 'En développement':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>Projets - Association des Jeunes de Konney-Souazo (AJK)</title>
        <meta name="description" content="Découvrez nos projets d'entrepreneuriat des jeunes et d'amélioration du cadre de vie à Konney-Souazo. Des initiatives concrètes pour notre développement." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nos Projets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Des initiatives concrètes pour le développement de notre communauté
          </motion.p>
        </div>
      </section>

      {/* Vue d'ensemble des projets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              Notre approche de développement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nos projets s'articulent autour de deux axes stratégiques : l'entrepreneuriat des jeunes 
              pour créer des opportunités économiques, et l'amélioration du cadre de vie pour renforcer 
              les infrastructures de base de notre communauté.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-cream p-8 rounded-lg shadow-soft"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-white mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-forest mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-forest">{category.projects.length}</div>
                    <div className="text-sm text-gray-600">Projets</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-forest">
                      {category.projects.filter(p => p.status === 'En cours').length}
                    </div>
                    <div className="text-sm text-gray-600">En cours</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-forest">
                      {category.projects.filter(p => p.status === 'Terminé').length}
                    </div>
                    <div className="text-sm text-gray-600">Terminés</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets détaillés */}
      {projectCategories.map((category, categoryIndex) => (
        <section key={category.id} className={categoryIndex % 2 === 0 ? "py-20 bg-cream" : "py-20 bg-white"}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-white mr-3`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest">
                  {category.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-lg transition-smooth"
                >
                  <img  
                    className="w-full h-48 object-cover" 
                    alt={project.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-forest mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {project.beneficiaries}
                      </div>
                      <Button 
                        size="sm" 
                        onClick={handleFeatureClick}
                        className="bg-forest hover:bg-accent-green"
                      >
                        En savoir plus
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Impact et résultats */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre impact en chiffres
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Des résultats concrets qui transforment notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Jeunes formés", icon: <Users className="w-8 h-8" /> },
              { number: "12", label: "Projets réalisés", icon: <Target className="w-8 h-8" /> },
              { number: "1200+", label: "Bénéficiaires", icon: <MapPin className="w-8 h-8" /> },
              { number: "6", label: "Années d'expérience", icon: <Calendar className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              Participez à nos projets
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez-nous pour contribuer au développement de Konney-Souazo. 
              Votre participation peut faire la différence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleFeatureClick}
                className="bg-forest hover:bg-accent-green"
              >
                <Users className="w-5 h-5 mr-2" />
                Devenir bénévole
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleFeatureClick}
                className="border-forest text-forest hover:bg-forest hover:text-white"
              >
                <Target className="w-5 h-5 mr-2" />
                Proposer un projet
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
