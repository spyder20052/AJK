import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const projects = [
    { title: "Entrepreneuriat des jeunes", description: "Formation et accompagnement de 50 jeunes entrepreneurs", target: "2 000 000 FCFA", raised: "1 200 000 FCFA", percentage: 60, image: "Jeunes entrepreneurs africains en formation dans un centre moderne" },
    { title: "Accès à l'eau potable", description: "Installation de nouveaux forages dans le village", target: "5 000 000 FCFA", raised: "3 500 000 FCFA", percentage: 70, image: "Construction d'un nouveau forage d'eau potable dans un village africain" },
    { title: "Électrification solaire", description: "Éclairage public et équipements communautaires", target: "3 000 000 FCFA", raised: "800 000 FCFA", percentage: 27, image: "Installation de panneaux solaires dans un village africain" }
];

const ProjectsToFund = () => {
    const { toast } = useToast();
    const handleDonateClick = () => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
            description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
        });
    };

    return (
        <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
                        Projets à financer
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Découvrez les projets que vos dons contribuent à réaliser
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-lg shadow-soft overflow-hidden">
                            <img  
                              className="w-full h-48 object-cover" 
                              alt={project.title}
                             src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-forest mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>Collecté: {project.raised}</span>
                                        <span>Objectif: {project.target}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-forest h-2 rounded-full transition-smooth" style={{ width: `${project.percentage}%` }}></div>
                                    </div>
                                    <div className="text-center mt-2">
                                        <span className="text-sm font-medium text-forest">{project.percentage}% atteint</span>
                                    </div>
                                </div>
                                <Button onClick={handleDonateClick} className="w-full bg-forest hover:bg-accent-green">
                                    Soutenir ce projet
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsToFund;