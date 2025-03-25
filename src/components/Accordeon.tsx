import { useState } from "react";
import styles from "../styles/Accordeon.module.css";

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  { title: 'Pourquoi "guerres puniques" ?', content: 'Le terme "punique" vient du latin Poenicus, dérivé de Phoenicius, en référence aux Phéniciens, ancêtres des Carthaginois. Rome appelait donc ces conflits les "guerres contre les Phéniciens".' },
  { title: "Un serment de sang : la haine éternelle d'Hannibal", content: "Selon la légende, Hannibal aurait juré à son père Hamilcar Barca, alors qu'il n'était qu'un enfant, de ne jamais être l'ami des Romains et de tout faire pour les détruire. Ce serment a façonné son destin... et l'Histoire." },
  { title: "Hannibal et ses éléphants : mythe ou réalité ?", content: "Hannibal Barca a bien traversé les Alpes avec des éléphants en 218 av. J.-C., mais très peu ont survécu au froid et aux conditions extrêmes. Lors de la bataille de Cannes, Hannibal n'avait plus qu'un seul éléphant encore en vie !" },
  { title: "La bataille de Cannes : le chef-d'œuvre stratégique", content: "En 216 av. J.-C., Hannibal inflige à Rome l'une des pires défaites de son histoire. Il encercle et anéantit une armée deux fois plus nombreuse, utilisant une tactique en double tenaille encore étudiée dans les académies militaires." },
  { title: "Rome a failli disparaître après Cannes", content: "Après sa victoire écrasante à Cannes, Hannibal était aux portes de Rome. Mais au lieu d'attaquer directement la ville, il choisit d'attendre des renforts… qui ne sont jamais arrivés. Un retard qui a coûté à Carthage sa chance de détruire Rome." },
  { title: 'Le dernier mot de Caton : "Carthago delenda est"', content: 'Le sénateur romain Caton l\'Ancien terminait tous ses discours, quel que soit le sujet, par cette phrase : "Il faut détruire Carthage". Une obsession qui poussa Rome à déclencher la troisième guerre punique et à anéantir la ville.' },
  { title: "La fin brutale de Carthage", content: "En 146 av. J.-C., après un siège acharné, Rome rase Carthage et réduit sa population en esclavage. Selon les récits antiques, les Romains auraient versé du sel sur les terres pour qu'aucune vie ne puisse repousser… mais ce fut un mythe inventé bien plus tard !" }
];

const Accordeon = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className={styles.grid}>
        {accordionData.map((item, index) => (
          <div key={index} className={styles.item}>
            <button onClick={() => toggleAccordion(index)} className={styles.button}>
              <span>{item.title}</span>
              <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className={styles.content}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
  );
};

export default Accordeon;
