
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Heart, Target, CheckCircle, User, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BecomeMember = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    profession: '',
    motivation: '',
    skills: '',
    availability: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
    });
  };

  const reasons = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Contribuer au développement",
      description: "Participez activement au développement socio-économique de Konney-Souazo et de sa région."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Rejoindre une communauté",
      description: "Intégrez un réseau de jeunes dynamiques et engagés partageant les mêmes valeurs."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Développer vos compétences",
      description: "Bénéficiez de formations et d'opportunités pour développer vos compétences professionnelles."
    }
  ];

  const conditions = [
    "Être âgé(e) de 18 à 35 ans",
    "Résider à Konney-Souazo ou dans la région",
    "Adhérer aux valeurs et objectifs de l'association",
    "S'engager à participer activement aux activités",
    "Payer la cotisation annuelle de 5 000 FCFA",
    "Respecter les statuts et règlements intérieurs"
  ];

  const benefits = [
    "Participation aux formations gratuites",
    "Accès aux programmes de micro-crédit",
    "Réseau professionnel et social",
    "Opportunités de leadership",
    "Accompagnement dans vos projets",
    "Participation aux événements exclusifs"
  ];

  return (
    <>
      <Helmet>
        <title>Devenir membre - Association des Jeunes de Konney-Souazo (AJK)</title>
        <meta name="description" content="Rejoignez l'Association des Jeunes de Konney-Souazo. Découvrez les avantages, conditions et démarches pour devenir membre de notre communauté." />
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
            Devenir membre
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Rejoignez notre communauté et participez au développement de Konney-Souazo
          </motion.p>
        </div>
      </section>

      {/* Pourquoi nous rejoindre */}
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
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Devenir membre de l'AJK, c'est rejoindre une famille engagée pour l'avenir de notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-cream p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-forest mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions et avantages */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Conditions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-soft"
            >
              <h3 className="text-2xl font-bold text-forest mb-6">Conditions d'adhésion</h3>
              <ul className="space-y-4">
                {conditions.map((condition, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{condition}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Avantages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-soft"
            >
              <h3 className="text-2xl font-bold text-forest mb-6">Avantages membres</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
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
              Témoignages de nos membres
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez l'expérience de ceux qui ont rejoint notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Salimata BARRY",
                role: "Membre depuis 2020",
                quote: "Rejoindre l'AJK a transformé ma vie. J'ai pu développer mon projet d'élevage grâce aux formations et au soutien de l'association.",
                image: "Portrait d'une jeune femme africaine souriante et confiante"
              },
              {
                name: "Moussa ZONGO",
                role: "Membre depuis 2019",
                quote: "L'AJK m'a permis de créer mon entreprise de transformation agricole. Le réseau et l'accompagnement sont exceptionnels.",
                image: "Portrait d'un jeune homme africain entrepreneur confiant"
              },
              {
                name: "Aïcha SANKARA",
                role: "Membre depuis 2021",
                quote: "Grâce à l'AJK, j'ai acquis des compétences en leadership et je contribue maintenant au développement de notre village.",
                image: "Portrait d'une jeune femme africaine leader communautaire"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <img  
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                    alt={`Portrait de ${testimonial.name}`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                  <div>
                    <h4 className="font-semibold text-forest">{testimonial.name}</h4>
                    <p className="text-sm text-soft-brown">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire d'adhésion */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              Formulaire d'adhésion
            </h2>
            <p className="text-lg text-gray-600">
              Remplissez ce formulaire pour rejoindre notre communauté
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-soft"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                      placeholder="+226 XX XX XX XX"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={2}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                    placeholder="Votre adresse complète"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                  Profession*
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                  placeholder="Votre profession actuelle"
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  Motivation *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                  placeholder="Expliquez pourquoi vous souhaitez rejoindre l'AJK..."
                />
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                  Compétences et expériences
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                  placeholder="Décrivez vos compétences et expériences pertinentes..."
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Disponibilité
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                >
                  <option value="">Sélectionnez votre disponibilité</option>
                  <option value="weekends">Week-ends uniquement</option>
                  <option value="evenings">Soirées en semaine</option>
                  <option value="flexible">Horaires flexibles</option>
                  <option value="full-time">Temps plein</option>
                </select>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-forest hover:bg-accent-green px-8"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Soumettre ma candidature
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Prochaines étapes */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              Prochaines étapes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-forest mb-2">Examen du dossier</h3>
                <p className="text-gray-600">Nous examinerons votre candidature sous 48h</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-forest mb-2">Entretien</h3>
                <p className="text-gray-600">Rencontre avec un membre du bureau exécutif</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-forest mb-2">Intégration</h3>
                <p className="text-gray-600">Accueil et présentation de nos activités</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BecomeMember;
