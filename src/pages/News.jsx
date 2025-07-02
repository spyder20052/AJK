
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const News = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
    });
  };

  const categories = [
    { id: 'all', name: 'Toutes les actualités' },
    { id: 'projects', name: 'Projets' },
    { id: 'events', name: 'Événements' },
    { id: 'community', name: 'Vie communautaire' },
    { id: 'partnerships', name: 'Partenariats' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Lancement du projet d'entrepreneuriat des jeunes",
      excerpt: "Un nouveau programme pour accompagner les jeunes entrepreneurs de notre village dans la création et le développement de leurs activités économiques.",
      content: "Ce projet ambitieux vise à former 50 jeunes aux techniques entrepreneuriales modernes...",
      date: "15 Décembre 2024",
      author: "Amadou TRAORE",
      category: "projects",
      image: "Jeunes entrepreneurs africains travaillant ensemble dans un atelier moderne avec des outils et équipements",
      featured: true
    },
    {
      id: 2,
      title: "Assemblée générale annuelle 2024",
      excerpt: "Retour sur les réalisations de l'année et présentation des projets futurs lors de notre assemblée générale.",
      content: "L'assemblée générale s'est tenue en présence de tous les membres...",
      date: "10 Décembre 2024",
      author: "Fatima OUEDRAOGO",
      category: "events",
      image: "Grande assemblée de villageois africains dans une salle communautaire moderne",
      featured: false
    },
    {
      id: 3,
      title: "Amélioration de l'accès à l'eau potable",
      excerpt: "Installation de nouveaux points d'eau dans le village grâce à nos partenaires internationaux.",
      content: "Trois nouveaux forages ont été réalisés dans différents quartiers du village...",
      date: "5 Décembre 2024",
      author: "Ibrahim SAWADOGO",
      category: "projects",
      image: "Nouveau puits d'eau potable moderne dans un village africain avec des enfants qui boivent",
      featured: false
    },
    {
      id: 4,
      title: "Partenariat avec l'ONG Développement Durable",
      excerpt: "Signature d'un accord de partenariat pour le financement de nos projets environnementaux.",
      content: "Ce partenariat stratégique nous permettra de développer nos actions...",
      date: "1 Décembre 2024",
      author: "Mariam KONE",
      category: "partnerships",
      image: "Cérémonie de signature de partenariat entre dirigeants africains et représentants d'ONG",
      featured: false
    },
    {
      id: 5,
      title: "Formation en agriculture moderne",
      excerpt: "Session de formation sur les techniques agricoles durables pour nos membres agriculteurs.",
      content: "Une formation de trois jours a été organisée pour 30 jeunes agriculteurs...",
      date: "25 Novembre 2024",
      author: "Boukary OUATTARA",
      category: "community",
      image: "Formation agricole avec des jeunes africains apprenant les techniques modernes dans un champ",
      featured: false
    },
    {
      id: 6,
      title: "Journée de reboisement communautaire",
      excerpt: "Plus de 200 arbres plantés lors de notre journée de reboisement avec la participation de toute la communauté.",
      content: "Cette initiative environnementale a mobilisé plus de 100 participants...",
      date: "20 Novembre 2024",
      author: "Aïcha SANKARA",
      category: "community",
      image: "Communauté africaine plantant des arbres ensemble dans un paysage rural",
      featured: false
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <>
      <Helmet>
        <title>Actualités - Association des Jeunes de Konney-Souazo (AJK)</title>
        <meta name="description" content="Suivez les dernières actualités de l'Association des Jeunes de Konney-Souazo. Découvrez nos projets, événements et réalisations." />
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
            Actualités
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Restez informés de nos dernières actions et réalisations
          </motion.p>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher dans les actualités..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                    selectedCategory === category.id
                      ? 'bg-forest text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article en vedette */}
      {featuredArticle && selectedCategory === 'all' && !searchTerm && (
        <section className="py-12 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-soft overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img  
                  className="w-full h-64 lg:h-full object-cover" 
                  alt={featuredArticle.title}
                 src="https://images.unsplash.com/photo-1548778052-311f4bc2b502" />
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-soft-brown mb-4">
                    <span className="bg-forest text-white px-3 py-1 rounded-full text-xs font-medium">
                      À la une
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredArticle.date}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-forest mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      {featuredArticle.author}
                    </div>
                    <Button 
                      onClick={handleFeatureClick}
                      className="bg-forest hover:bg-accent-green"
                    >
                      Lire l'article
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Liste des articles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour votre recherche.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-lg transition-smooth cursor-pointer"
                  onClick={handleFeatureClick}
                >
                  <img  
                    className="w-full h-48 object-cover" 
                    alt={article.title}
                   src="https://images.unsplash.com/photo-1548778052-311f4bc2b502" />
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-soft-brown mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {categories.find(cat => cat.id === article.category)?.name}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-forest mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <span className="text-forest font-medium hover:text-accent-green transition-smooth">
                        Lire la suite →
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredArticles.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  onClick={handleFeatureClick}
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  Précédent
                </Button>
                <Button 
                  onClick={handleFeatureClick}
                  className="bg-forest hover:bg-accent-green"
                >
                  1
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleFeatureClick}
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  2
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleFeatureClick}
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  3
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleFeatureClick}
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  Suivant
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default News;
