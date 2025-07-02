import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const predefinedAmounts = [
    { value: '5000', label: '5 000 FCFA' },
    { value: '10000', label: '10 000 FCFA' },
    { value: '25000', label: '25 000 FCFA' },
    { value: '50000', label: '50 000 FCFA' },
    { value: '100000', label: '100 000 FCFA' },
    { value: '250000', label: '250 000 FCFA' }
];

const DonationForm = () => {
    const { toast } = useToast();
    const [selectedAmount, setSelectedAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [donationType, setDonationType] = useState('one-time');

    const handleDonateClick = () => {
        toast({
            title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
            description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
        });
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
                        Faire un don maintenant
                    </h2>
                    <p className="text-lg text-gray-600">
                        Choisissez le montant de votre contribution
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="bg-cream p-8 rounded-lg shadow-soft">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-forest mb-4">Type de don</h3>
                        <div className="flex space-x-4">
                            <button onClick={() => setDonationType('one-time')} className={`flex-1 py-3 px-4 rounded-lg font-medium transition-smooth ${donationType === 'one-time' ? 'bg-forest text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                                Don unique
                            </button>
                            <button onClick={() => setDonationType('monthly')} className={`flex-1 py-3 px-4 rounded-lg font-medium transition-smooth ${donationType === 'monthly' ? 'bg-forest text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                                Don mensuel
                            </button>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-forest mb-4">Montant</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            {predefinedAmounts.map((amount) => (
                                <button key={amount.value} onClick={() => { setSelectedAmount(amount.value); setCustomAmount(''); }} className={`py-3 px-4 rounded-lg font-medium transition-smooth ${selectedAmount === amount.value ? 'bg-forest text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'}`}>
                                    {amount.label}
                                </button>
                            ))}
                        </div>
                        <div>
                            <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                                Autre montant (FCFA)
                            </label>
                            <input type="number" id="customAmount" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(''); }} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent" placeholder="Entrez votre montant" />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button onClick={handleDonateClick} size="lg" className="bg-forest hover:bg-accent-green px-8" disabled={!selectedAmount && !customAmount}>
                            <Heart className="w-5 h-5 mr-2" />
                            Faire un don de {selectedAmount || customAmount || '...'} FCFA
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DonationForm;