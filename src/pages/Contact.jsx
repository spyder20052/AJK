
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: ["Konney-Souazo", "Province du Ganzourgou", "Burkina Faso"],
      color: "bg-forest"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: ["+226 XX XX XX XX", "+226 YY YY YY YY"],
      color: "bg-soft-brown"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@ajk-konney.org", "info@ajk-konney.org"],
      color: "bg-forest"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      details: ["Lun - Ven: 8h - 17h", "Sam: 8h - 12h", "Dim: Fermé"],
      color: "bg-soft-brown"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "#",
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "#",
      color: "hover:bg-blue-400"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "#",
      color: "hover:bg-pink-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Association des Jeunes de Konney-Souazo (AJK)</title>
        <meta name="description" content="Contactez l'Association des Jeunes de Konney-Souazo. Trouvez nos coordonnées, horaires et utilisez notre formulaire de contact." />
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
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Nous sommes là pour répondre à vos questions et vous accompagner
          </motion.p>
        </div>
      </section>

      {/* Informations de contact */}
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
              Nos coordonnées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plusieurs moyens pour nous joindre et échanger avec notre équipe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-cream p-6 rounded-lg"
              >
                <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-forest mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact et carte */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-forest mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-soft space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="membership">Adhésion</option>
                    <option value="partnership">Partenariat</option>
                    <option value="project">Projet</option>
                    <option value="volunteer">Bénévolat</option>
                    <option value="donation">Don</option>
                    <option value="information">Demande d'information</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                    placeholder="Votre message..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-forest hover:bg-accent-green"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </motion.div>

            {/* Carte et informations supplémentaires */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-forest mb-6">Notre localisation</h3>
                <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Carte de Konney-Souazo</p>
                      <p className="text-sm">Burkina Faso</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-forest mb-2">Comment nous trouver</h4>
                    <p className="text-gray-600 text-sm">
                      Konney-Souazo est situé dans la province du Ganzourgou, 
                      à environ 45 km de Ouagadougou. Notre bureau se trouve 
                      au centre du village, près de l'école primaire.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h4 className="text-xl font-semibold text-forest mb-4">Suivez-nous</h4>
                <p className="text-gray-600 mb-4">
                  Restez connectés avec nous sur les réseaux sociaux pour suivre 
                  nos actualités et événements.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      onClick={(e) => {
                        e.preventDefault();
                        toast({
                          title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
                          description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
                        });
                      }}
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-smooth ${social.color} hover:text-white`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h4 className="text-xl font-semibold text-forest mb-4">Urgences</h4>
                <p className="text-gray-600 mb-4">
                  Pour les urgences ou situations nécessitant une intervention rapide :
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-forest" />
                    <span className="font-medium">+226 XX XX XX XX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-forest" />
                    <span className="font-medium">urgence@ajk-konney.org</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Trouvez rapidement des réponses à vos questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Comment puis-je devenir membre de l'AJK ?",
                answer: "Vous pouvez remplir le formulaire d'adhésion en ligne ou nous contacter directement. Les conditions d'adhésion incluent être âgé de 18 à 35 ans et résider dans la région."
              },
              {
                question: "Quels sont les projets en cours ?",
                answer: "Nous menons actuellement des projets d'entrepreneuriat des jeunes, d'amélioration de l'accès à l'eau potable et d'électrification solaire. Consultez notre page Projets pour plus de détails."
              },
              {
                question: "Comment puis-je faire un don ?",
                answer: "Vous pouvez faire un don via notre page dédiée ou nous contacter pour connaître les modalités de versement. Tous les dons contribuent directement à nos projets communautaires."
              },
              {
                question: "Organisez-vous des événements publics ?",
                answer: "Oui, nous organisons régulièrement des assemblées générales, des formations et des événements communautaires. Suivez nos actualités pour être informé des prochains événements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-forest mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
