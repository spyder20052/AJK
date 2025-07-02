
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Image, Play, FileText, Download, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const MediaLibrary = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('photos');

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
    });
  };

  const tabs = [
    { id: 'photos', name: 'Photos', icon: <Image className="w-5 h-5" /> },
    { id: 'videos', name: 'Vidéos', icon: <Play className="w-5 h-5" /> },
    { id: 'press', name: 'Presse', icon: <FileText className="w-5 h-5" /> },
    { id: 'documents', name: 'Documents', icon: <Download className="w-5 h-5" /> }
  ];

  const photos = [
    {
      id: 1,
      title: "Assemblée générale 2024",
      date: "10 Décembre 2024",
      category: "Événements",
      image: "Grande assemblée de villageois africains dans une salle communautaire moderne",
      views: 245
    },
    {
      id: 2,
      title: "Formation entrepreneuriale",
      date: "5 Décembre 2024",
      category: "Formation",
      image: "Jeunes africains en formation entrepreneuriale dans une salle moderne avec ordinateurs",
      views: 189
    },
    {
      id: 3,
      title: "Nouveau forage d'eau",
      date: "1 Décembre 2024",
      category: "Infrastructure",
      image: "Nouveau forage d'eau potable dans un village africain avec des villageois qui collectent l'eau",
      views: 312
    },
    {
      id: 4,
      title: "Journée de reboisement",
      date: "20 Novembre 2024",
      category: "Environnement",
      image: "Communauté africaine plantant des arbres ensemble dans un paysage rural",
      views: 156
    },
    {
      id: 5,
      title: "Signature de partenariat",
      date: "15 Novembre 2024",
      category: "Partenariats",
      image: "Cérémonie de signature de partenariat entre dirigeants africains et représentants d'ONG",
      views: 203
    },
    {
      id: 6,
      title: "Formation agricole",
      date: "10 Novembre 2024",
      category: "Agriculture",
      image: "Formation agricole avec des jeunes africains apprenant les techniques modernes dans un champ",
      views: 178
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Présentation de l'AJK",
      duration: "5:30",
      date: "15 Décembre 2024",
      description: "Découvrez l'Association des Jeunes de Konney-Souazo en vidéo",
      thumbnail: "Équipe de l'AJK présentant leurs projets devant la caméra dans le village",
      views: 1250
    },
    {
      id: 2,
      title: "Projet d'entrepreneuriat en action",
      duration: "8:45",
      date: "8 Décembre 2024",
      description: "Reportage sur nos formations entrepreneuriales",
      thumbnail: "Jeunes entrepreneurs africains travaillant dans un atelier moderne",
      views: 890
    },
    {
      id: 3,
      title: "Inauguration du nouveau forage",
      duration: "3:20",
      date: "2 Décembre 2024",
      description: "Cérémonie d'inauguration du nouveau point d'eau",
      thumbnail: "Cérémonie d'inauguration d'un forage avec des villageois africains célébrant",
      views: 567
    }
  ];

  const pressArticles = [
    {
      id: 1,
      title: "L'AJK primée pour son innovation sociale",
      source: "Journal du Burkina",
      date: "12 Décembre 2024",
      excerpt: "L'Association des Jeunes de Konney-Souazo reçoit le prix de l'innovation sociale...",
      image: "Article de journal avec photo de l'équipe AJK recevant un prix"
    },
    {
      id: 2,
      title: "Un modèle de développement communautaire",
      source: "Radio Nationale",
      date: "5 Décembre 2024",
      excerpt: "Interview du président de l'AJK sur les stratégies de développement local...",
      image: "Studio de radio avec le président de l'AJK en interview"
    },
    {
      id: 3,
      title: "Les jeunes de Konney-Souazo montrent l'exemple",
      source: "Télévision Burkina",
      date: "28 Novembre 2024",
      excerpt: "Reportage sur les initiatives des jeunes pour transformer leur village...",
      image: "Équipe de télévision filmant les projets de l'AJK dans le village"
    }
  ];

  const documents = [
    {
      id: 1,
      title: "Rapport d'activités 2024",
      type: "PDF",
      size: "2.5 MB",
      date: "20 Décembre 2024",
      description: "Bilan complet de nos activités et réalisations de l'année 2024",
      downloads: 156
    },
    {
      id: 2,
      title: "Statuts de l'association",
      type: "PDF",
      size: "1.2 MB",
      date: "15 Janvier 2024",
      description: "Statuts officiels de l'Association des Jeunes de Konney-Souazo",
      downloads: 89
    },
    {
      id: 3,
      title: "Plan stratégique 2025-2027",
      type: "PDF",
      size: "3.1 MB",
      date: "10 Décembre 2024",
      description: "Notre vision et nos objectifs pour les trois prochaines années",
      downloads: 234
    },
    {
      id: 4,
      title: "Guide de l'entrepreneur",
      type: "PDF",
      size: "4.2 MB",
      date: "5 Décembre 2024",
      description: "Manuel pratique pour les jeunes entrepreneurs de notre communauté",
      downloads: 312
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'photos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-lg transition-smooth cursor-pointer"
                onClick={handleFeatureClick}
              >
                <div className="relative">
                  <img  
                    className="w-full h-48 object-cover" 
                    alt={photo.title}
                   src="https://images.unsplash.com/photo-1633362967859-fde6c856274d" />
                  <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {photo.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-forest mb-2">{photo.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {photo.date}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {photo.views}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'videos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-lg transition-smooth cursor-pointer"
                onClick={handleFeatureClick}
              >
                <div className="relative">
                  <img  
                    className="w-full h-48 object-cover" 
                    alt={video.title}
                   src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-forest ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-forest mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {video.date}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {video.views}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'press':
        return (
          <div className="space-y-6">
            {pressArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-lg transition-smooth cursor-pointer"
                onClick={handleFeatureClick}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <img  
                    className="w-full h-48 md:h-full object-cover" 
                    alt={article.title}
                   src="https://images.unsplash.com/photo-1548778052-311f4bc2b502" />
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center text-sm text-soft-brown mb-2">
                      <span className="font-medium">{article.source}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-forest mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button 
                      size="sm" 
                      onClick={handleFeatureClick}
                      className="bg-forest hover:bg-accent-green"
                    >
                      Lire l'article
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'documents':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-soft p-6 hover:shadow-lg transition-smooth"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-forest rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-forest mb-2">{doc.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{doc.type} • {doc.size}</span>
                      <span>{doc.downloads} téléchargements</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{doc.date}</span>
                      <Button 
                        size="sm" 
                        onClick={handleFeatureClick}
                        className="bg-forest hover:bg-accent-green"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Médiathèque - Association des Jeunes de Konney-Souazo (AJK)</title>
        <meta name="description" content="Explorez notre médiathèque : photos, vidéos, articles de presse et documents téléchargeables de l'Association des Jeunes de Konney-Souazo." />
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
            Médiathèque
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Découvrez nos photos, vidéos et documents qui retracent notre histoire
          </motion.p>
        </div>
      </section>

      {/* Navigation par onglets */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-smooth ${
                  activeTab === tab.id
                    ? 'bg-forest text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu de la médiathèque */}
      <section className="py-12 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </section>
    </>
  );
};

export default MediaLibrary;
