import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-stone-50 to-amber-50/30">
      <div id="contact" className="absolute -mt-20"></div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
            Rencontrons-nous
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Prêt à explorer votre chemin intérieur ? Explorons vos envies gratuitement par téléphone.
          </p>
          
          <motion.a
            href="https://calendly.com/michael_matsos/appel-decouverte"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-8 bg-amber-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-amber-600 transition-colors"
          >
            Réserver mon appel découverte
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 max-w-md mx-auto"
        >
          <h3 className="text-2xl font-semibold text-stone-800 mb-6 text-center">
            Informations pratiques
          </h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-amber-600 mt-1" size={20} />
              <div>
                <h4 className="font-medium text-stone-800">Email</h4>
                <p className="text-stone-600">michael_matsos@msn.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-amber-600 mt-1" size={20} />
              <div>
                <h4 className="font-medium text-stone-800">Téléphone</h4>
                <p className="text-stone-600">+32 472 49 88 80</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-amber-600 mt-1" size={20} />
              <div>
                <h4 className="font-medium text-stone-800">Adresse</h4>
                <p className="text-stone-600">63 Rue Nestor Bal, 6032 Mont-sur-Marchienne</p>
              </div>
            </div>
          </div>

          <p className="text-stone-600 mb-6 text-center">
            Réserver votre séance d'accompagnement par message ou via ce lien calendly :
          </p>

          <motion.a
            href="https://calendly.com/michael_matsos/nouvelle-reunion"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-amber-500 text-white py-4 rounded-xl text-lg font-medium hover:bg-amber-600 transition-colors inline-block text-center"
          >
            Réserver votre séance
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;