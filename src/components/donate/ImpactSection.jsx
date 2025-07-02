import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Users, Building, Target } from 'lucide-react';

const impactExamples = [
    { amount: '5 000 FCFA', impact: 'Fourniture de matériel scolaire pour un enfant', icon: <Gift className="w-6 h-6" /> },
    { amount: '25 000 FCFA', impact: 'Formation entrepreneuriale pour un jeune', icon: <Users className="w-6 h-6" /> },
    { amount: '100 000 FCFA', impact: 'Contribution à un projet d\'infrastructure', icon: <Building className="w-6 h-6" /> },
    { amount: '250 000 FCFA', impact: 'Financement complet d\'un micro-projet', icon: <Target className="w-6 h-6" /> }
];

const ImpactSection = () => (
    <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
                    L'impact de votre don
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Découvrez comment votre contribution peut faire la différence
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactExamples.map((example, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-soft text-center">
                        <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                            {example.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-forest mb-2">{example.amount}</h3>
                        <p className="text-gray-600 text-sm">{example.impact}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default ImpactSection;