import React from 'react';
import { motion } from 'framer-motion';
import { Building, CreditCard } from 'lucide-react';

const bankingInfo = {
    bankName: "Banque Atlantique Burkina Faso",
    accountName: "Association des Jeunes de Konney-Souazo",
    accountNumber: "BF XX XXXX XXXX XXXX XXXX XXXX XX",
    swiftCode: "ATBKBFBF",
    mobileMoney: {
        orangeMoney: "+226 XX XX XX XX",
        mobiCash: "+226 YY YY YY YY"
    }
};

const OtherDonationMethods = () => (
    <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
                    Autres moyens de don
                </h2>
                <p className="text-lg text-gray-600">
                    Vous pouvez également faire un don par virement bancaire ou mobile money
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-cream p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                        <Building className="w-6 h-6 text-forest mr-3" />
                        <h3 className="text-xl font-semibold text-forest">Virement bancaire</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                        <div><span className="font-medium">Banque:</span><p className="text-gray-600">{bankingInfo.bankName}</p></div>
                        <div><span className="font-medium">Titulaire du compte:</span><p className="text-gray-600">{bankingInfo.accountName}</p></div>
                        <div><span className="font-medium">Numéro de compte:</span><p className="text-gray-600 font-mono">{bankingInfo.accountNumber}</p></div>
                        <div><span className="font-medium">Code SWIFT:</span><p className="text-gray-600 font-mono">{bankingInfo.swiftCode}</p></div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-cream p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                        <CreditCard className="w-6 h-6 text-forest mr-3" />
                        <h3 className="text-xl font-semibold text-forest">Mobile Money</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                        <div><span className="font-medium">Orange Money:</span><p className="text-gray-600 font-mono">{bankingInfo.mobileMoney.orangeMoney}</p></div>
                        <div><span className="font-medium">Mobi Cash:</span><p className="text-gray-600 font-mono">{bankingInfo.mobileMoney.mobiCash}</p></div>
                        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded"><p className="text-yellow-800 text-xs"><strong>Important:</strong> Mentionnez "Don AJK" dans le libellé de votre transfert</p></div>
                    </div>
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mt-8 text-center bg-forest text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Reçu fiscal</h3>
                <p className="text-gray-200">
                    Un reçu fiscal vous sera envoyé par email pour tout don supérieur à 10 000 FCFA. 
                    N'oubliez pas de nous communiquer vos coordonnées après votre don.
                </p>
            </motion.div>
        </div>
    </section>
);

export default OtherDonationMethods;