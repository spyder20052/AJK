import React from 'react';
import { motion } from 'framer-motion';

const DonateHero = () => (
  <section className="py-20 bg-forest text-white">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-6">
        Faire un don
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-gray-200">
        Votre générosité transforme des vies et construit l'avenir de Konney-Souazo
      </motion.p>
    </div>
  </section>
);

export default DonateHero;