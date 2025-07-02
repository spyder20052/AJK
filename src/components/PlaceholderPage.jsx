
    import React, { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ title }) => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: '🚧 Bientôt disponible !',
      description: "Cette fonctionnalité n'est pas encore implémentée, mais vous pouvez la demander dans votre prochain message ! 🚀",
    });
  }, [toast]);

  return (
    <>
      <Helmet>
        <title>{title} | AJK</title>
        <meta name="description" content={`Page ${title} de l'Association des Jeunes de Konney-Souazo.`} />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-forest mb-4">{title}</h1>
          <p className="text-xl text-brown">Cette page est en cours de construction.</p>
        </motion.div>
      </div>
    </>
  );
};

export default PlaceholderPage;
  