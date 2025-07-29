import React from 'react';
import { motion } from 'framer-motion';

const WhoAmI = () => {
  return (
    <section id="qui-suis-je" className="py-8" style={{ backgroundColor: 'rgb(250, 243, 224)' }}>
      <div className="max-w-4xl mx-auto px-6">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-stone-700 leading-relaxed"
        >
          <img 
            src="/Images/Micha photo profil.jpeg" 
            alt="Michael Matsos" 
            className="float-left w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg mr-6 mb-4"
          />

          <p className="mb-4">
            Je suis <strong>Michael Matsos</strong>, guide en évolution intérieure.
          </p>
          <p className="mb-4">
            Mon boulot, c'est d'aider les gens à se libérer de ce qui les bloque, à se reconnecter à eux, à l'essentiel. Mais à vrai dire… c'est plus qu'un boulot. C'est une quête.
          </p>
          
          <p className="mb-4">
            <span className="text-xl font-bold text-amber-700">Qu'est-ce qu'on fait sur cette petite planète bleue ?</span>
          </p>
          
          <p className="mb-4">
            Moi oui. Très souvent. C'est quoi, être humain ? Réussir sa vie ? (Comme si on pouvait vraiment la rater.) Comment ça fonctionne, tout ça ? On m'a appris le théorème de Pythagore à l'école, mais pas à maitriser mes émotions, à intégrer mes parts d'ombres, à maitriser mon auto-saboteur et mon mental.
          </p>
          
          <p className="mb-4 font-semibold">
            J'ai passé des années à chercher des réponses.
          </p>
          <p className="mb-4">
            À explorer la psychologie moderne, les traditions spirituelles, la philo, les états de conscience modifiés. J'ai médité, expérimenté, rencontré pas mal de gens de tous horizons. Et pris pas mal de psychédéliques aussi. Parce que parfois, pour comprendre l'intérieur, il faut oser sortir des sentiers battus.
          </p>
          <p className="mb-6 font-medium text-amber-700">
            Et surtout : j'ai testé sur moi. Parce que j'en avais besoin. Parce que la vie m'a donné pas mal de défis intérieurs à apprivoiser.
          </p>

          <p className="mb-4">
            Longtemps, j'ai cru qu'il fallait mériter sa place. Être drôle, intelligent, utile — comme si on devait gagner sa légitimité à coups de performances ou de diplômes invisibles.
          </p>
          <p className="mb-4">
            Mais au fond, ce n'est pas en devenant quelqu'un qu'on se libère.
          </p>
          <p className="mb-4">
            C'est en osant être pleinement soi, et en s'acceptant, avec ses défauts (même les vilains). Parce que non, on a pas été créé parfait et probablement qu'on ne le sera jamais.
          </p>
          
          <p className="mb-6 font-medium text-amber-700">
            Mais la clé, c'est de comprendre qu'on a pas besoin de l'être. On doit pas attendre d'arriver quelque part pour commencer à s'aimer.
          </p>

          <p className="mb-4 font-semibold">
            Et pourquoi je fais ça ?
          </p>
          <p className="mb-4">
            Parce qu'accompagner quelqu'un, c'est plus qu'un service : c'est une rencontre d'âme à âme.
          </p>
          <p className="mb-4">
            Un moment rare, sincère, où on arrête de jouer des rôles.
          </p>
          <p className="mb-6">
            J'aide les gens à se retrouver — et eux, sans le savoir, m'aident à affiner ma propre quête.
            Chaque séance m'en apprend un peu plus sur moi, sur l'humain, sur la vie.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoAmI;