import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const points = [
    "100% des dons vont directement aux projets",
    "Transparence totale sur l'utilisation des fonds",
    "Impact mesurable et rapports réguliers",
    "Reconnaissance officielle pour les donateurs"
];

const WhyDonate = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
            Pourquoi faire un don ?
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Chaque don, petit ou grand, contribue directement à l'amélioration des conditions 
            de vie de notre communauté. Votre soutien nous permet de réaliser des projets 
            concrets qui transforment durablement la vie des habitants de Konney-Souazo.
          </p>
          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <img  
            className="w-full h-96 object-cover rounded-lg shadow-soft" 
            alt="Communauté de Konney-Souazo bénéficiant des projets"
           src="https://images.unsplash.com/photo-1551381922-1f0c930e7df0" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyDonate;