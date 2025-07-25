import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Compass } from 'lucide-react';

const WhoAmI = () => {
  return (
    <section id="qui-suis-je" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header avec titre à gauche et image à droite */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 italic">
              Qui suis-je ?
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 md:mt-0 md:ml-8"
          >
            <img 
              src="/Images/Micha photo profil.jpeg" 
              alt="Michael Matsos" 
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Question d'accroche */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6"
          >
            <p className="text-2xl font-bold text-stone-800 leading-relaxed">
              Tu t'es déjà demandé ce qu'on fout ici ?
            </p>
          </motion.div>
          
          {/* Questions existentielles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-2 mb-6"
          >
            <p className="text-lg text-stone-700 leading-relaxed">
              Pourquoi on tourne en boucle dans les mêmes galères ?
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Pourquoi on a parfois l'impression de rater sa vie, ou de ne pas vivre la sienne ?
            </p>
            <p className="text-lg text-stone-700 leading-relaxed font-medium">
              Moi oui. Trop souvent. Ça m'a travaillé, rongé, éveillé.
            </p>
          </motion.div>

          {/* Présentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-stone-50 rounded-xl p-6"
          >
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-4">
              Je suis <strong>Michael Matsos</strong>, guide en évolution intérieure.
            </p>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
              Mon boulot, c'est d'aider les gens à se libérer de ce qui les bloque à l'intérieur : 
              croyances limitantes, nœuds émotionnels, schémas inconscients.
            </p>
          </motion.div>

          {/* La quête personnelle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
              <strong>Mais à vrai dire… c'est plus qu'un boulot. C'est une quête.</strong>
            </p>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
              J'ai passé des années à chercher des réponses.
            </p>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
              À explorer la psychologie moderne, les traditions spirituelles, la philo, les états de conscience modifiés.
            </p>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
              J'ai médité, prié, transpiré. Et pris pas mal de psychédéliques aussi. Parce que parfois, 
              pour comprendre l'intérieur, il faut oser sortir des sentiers battus.
            </p>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-semibold text-amber-700">
              Et surtout : j'ai testé sur moi. Parce que j'en avais besoin. Parce que la vie m'a donné 
              pas mal de défis intérieurs à apprivoiser.
            </p>
          </motion.div>

          {/* Réalisation personnelle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl p-6 border border-amber-200"
          >
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-4">
              Longtemps, j'ai cru qu'il fallait mériter sa place. Être drôle, intelligent, utile — 
              comme si on devait gagner sa légitimité à coups de performances ou de diplômes invisibles.
            </p>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-4">
              Mais au fond, ce n'est pas en devenant quelqu'un qu'on se libère.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-amber-700">
              C'est en osant être pleinement soi, dans ses ombres comme dans sa lumière.
            </p>
          </motion.div>

          {/* Pourquoi il fait ça */}
          <motion.div
            </p>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
              J'aide les gens à se retrouver — et eux, sans le savoir, m'aident à affiner ma propre quête.
            </p>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
              Chaque séance m'en apprend un peu plus sur moi, sur l'humain, sur la vie. 
            transition={{ duration: 0.8, delay: 0.3 }}
        </div>
      </div>
    </section>
  )
  );
};

export default WhoAmI;