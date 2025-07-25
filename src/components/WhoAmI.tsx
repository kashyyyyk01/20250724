import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Compass } from 'lucide-react';

const WhoAmI = () => {
  return (
    <section id="qui-suis-je" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
            Qui suis-je ?
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-stone-700 leading-relaxed"
          >
            {/* Question d'accroche mise en évidence */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-6">
              <p className="text-2xl font-bold text-stone-800">
                Tu t'es déjà demandé ce qu'on fout ici ?
              </p>
            </div>

            {/* Image flottante à gauche avec texte qui coule autour */}
            <img 
              src="/Images/Micha photo profil.jpeg" 
              alt="Michael Matsos" 
              className="float-left w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg mr-6 mb-4"
            />

            <p className="mb-4">
              Pourquoi on tourne en boucle dans les mêmes galères ?
            </p>
            <p className="mb-4">
              Pourquoi on a parfois l'impression de rater sa vie, ou de ne pas vivre la sienne ?
            </p>
            <p className="mb-4 font-medium">
              Moi oui. Trop souvent. Ça m'a travaillé, rongé, éveillé.
            </p>
            <p className="mb-4">
              Je suis <strong>Michael Matsos</strong>, guide en évolution intérieure.
            </p>
            <p className="mb-6">
              Mon boulot, c'est d'aider les gens à se libérer de ce qui les bloque à l'intérieur : 
              croyances limitantes, nœuds émotionnels, schémas inconscients.
            </p>

            <p className="mb-4 font-semibold">
              Mais à vrai dire… c'est plus qu'un boulot. C'est une quête.
            </p>
            <p className="mb-4">
              J'ai passé des années à chercher des réponses.
            </p>
            <p className="mb-4">
              À explorer la psychologie moderne, les traditions spirituelles, la philo, les états de conscience modifiés.
            </p>
            <p className="mb-4">
              J'ai médité, prié, transpiré. Et pris pas mal de psychédéliques aussi. Parce que parfois, 
              pour comprendre l'intérieur, il faut oser sortir des sentiers battus.
            </p>
            <p className="mb-6 font-medium text-amber-700">
              Et surtout : j'ai testé sur moi. Parce que j'en avais besoin. Parce que la vie m'a donné 
              pas mal de défis intérieurs à apprivoiser.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl p-6 border border-amber-200 mb-6 clear-left">
              <p className="mb-3">
                Longtemps, j'ai cru qu'il fallait mériter sa place. Être drôle, intelligent, utile — 
                comme si on devait gagner sa légitimité à coups de performances ou de diplômes invisibles.
              </p>
              <p className="mb-3">
                Mais au fond, ce n'est pas en devenant quelqu'un qu'on se libère.
              </p>
              <p className="text-xl font-semibold text-amber-700">
                C'est en osant être pleinement soi, dans ses ombres comme dans sa lumière.
              </p>
            </div>

            <p className="mb-4 font-semibold">
              Et pourquoi je fais ça ?
            </p>
            <p className="mb-4">
              Parce qu'accompagner quelqu'un, c'est plus qu'un service : c'est une rencontre d'âme à âme.
            </p>
            <p className="mb-4">
              Un moment rare, sincère, où on arrête de jouer des rôles.
            </p>
            <p className="mb-4">
              J'aide les gens à se retrouver — et eux, sans le savoir, m'aident à affiner ma propre quête.
            </p>
            <p className="mb-6">
              Chaque séance m'en apprend un peu plus sur moi, sur l'humain, sur la vie. 
              C'est un cercle vivant, pas une hiérarchie.
            </p>

            <div className="bg-stone-800 text-white rounded-xl p-6">
              <p className="mb-3">
                Si tu sens que quelque chose t'appelle, t'étrangle ou te pousse à aller voir derrière le décor, 
                peut-être qu'on a un bout de chemin à faire ensemble.
              </p>
              <p className="font-medium">
                Je ne suis pas là pour te changer. Juste pour t'aider à te retrouver.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;