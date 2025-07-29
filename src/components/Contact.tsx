import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-stone-50 to-amber-50/30">
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
            Prêt à explorer votre chemin intérieur ? Commençons par une séance découverte gratuite 
            pour voir si nous sommes faits pour travailler ensemble.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Séance découverte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200"
          >
            <h3 className="text-2xl font-semibold text-stone-800 mb-6">
              Rencontrons-nous
            </h3>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Prêt à explorer votre chemin intérieur ? Commençons par une séance découverte gratuite par téléphone !
            </p>

            <motion.a
              href="https://calendly.com/michael_matsos/appel-decouverte"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-amber-500 text-white py-4 rounded-xl text-lg font-medium hover:bg-amber-600 transition-colors inline-block text-center"
            >
              Réserver mon appel découverte
            </motion.a>
          </motion.div>

          {/* Right side - Informations pratiques */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200"
          >
            <h3 className="text-2xl font-semibold text-stone-800 mb-6">
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
            </div>

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
      </div>
    </section>
  );
};

export default Contact;