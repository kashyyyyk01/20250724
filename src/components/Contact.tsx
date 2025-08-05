import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-stone-50 to-amber-50/30">
      <div id="contact" className="absolute -mt-32"></div>
      <div className="max-w-6xl mx-auto px-6">
        {/* Rencontrons-nous */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
            Rencontrons-nous
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discutons de vos envies gratuitement par téléphone.
          </p>
          
          <motion.a
            href="https://calendly.com/michael_matsos/appel-decouverte"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-amber-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-amber-600 transition-colors mb-4"
          >
            Réserver mon appel découverte
          </motion.a>
          
          <p className="text-stone-600 italic">
            (Ou envoyez moi un SMS, je vous rappelerai !)
          </p>
        </motion.div>

        {/* Séance d'accompagnement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
            Séance d'accompagnement
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Réservez votre séance d'accompagnement par message ou via calendly
          </p>
          
          <motion.a
            href="https://calendly.com/michael_matsos/nouvelle-reunion"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-amber-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-amber-600 transition-colors"
          >
            Réserver votre séance
          </motion.a>
        </motion.div>

        {/* Informations pratiques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Informations de contact */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
            <div id="contact-info" className="absolute -mt-32"></div>
            <h3 className="text-2xl font-semibold text-stone-800 mb-6 text-center">
              Informations pratiques
            </h3>
            
            <div className="space-y-6">
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
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 text-center">
            <h3 className="text-2xl font-semibold text-stone-800 mb-6">
              Enregistrez mon contact
            </h3>
            <div className="flex justify-center">
              <img 
                src="/Images/QR VCARD LPL Enregistrez_mon_contact_.png" 
                alt="QR Code - Enregistrez mon contact" 
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;