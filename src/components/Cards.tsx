import React from "react";
import styles from '../styles/Card.module.css';
import carthaginois from '../assets/img/carthaginois.png';
import egyptien from '../assets/img/egyptien.png';
import grece from '../assets/img/grece.png';
import romain from '../assets/img/Romain.png';
import parthenon from '../assets/img/parthenon.png';

interface CardProps {
  image: string;
  title: string;
  description: string;
  icon: string;
  quote: string;
  historicalFigures: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, icon, quote, historicalFigures }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.img} />
      <h4 className={styles.titleCard}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <img src={icon} alt="Icon" className={styles.icone} />
      <p className={styles.description}>{quote}</p>
      <p className={styles.description}>{historicalFigures}</p>
    </div>
  );
};

const Cards: React.FC = () => {
  const cardsData: CardProps[] = [
    {
      image: romain,
      title: "Le Stratège Romain : Discipline et conquête avant tout !",
      description: "Vous êtes un bâtisseur d'empire, un meneur d'hommes prêt à tout pour imposer l'ordre et la grandeur. Rome est votre domaine et la discipline est votre force. Que ce soit sur un champ de bataille ou dans les couloirs du pouvoir, vous excellez dans la stratégie et l'organisation. Pour vous, seul compte l'avenir et chaque défi est une marche de plus vers la gloire éternelle.",
      icon: parthenon,
      quote: "Votre devise : \"Veni, vidi, vici\" – Je suis venu, j'ai vu, j'ai vaincu.",
      historicalFigures: "Personnalités historiques proches : Jules César, Scipion l’Africain, Auguste."
    },
    {
      image: egyptien,
      title: "Le Mystique Égyptien : Spiritualité et éternité",
      description: "Vous appartenez à un monde de rites, de symboles et de traditions sacrées. Pour vous, la vie et la mort ne sont que des étapes d'un cycle plus grand. Vous êtes en quête de stabilité, de sagesse et d'une vérité cachée derrière le visible. Vous avez une âme mystique, profonde et attachée aux valeurs ancestrales.",
      icon: parthenon,
      quote: "Votre devise : \"L'éternité commence aujourd'hui.\"",
      historicalFigures: "Personnalités historiques proches : Jules César, Scipion l’Africain, Auguste."
    },
    {
      image: carthaginois,
      title: "Le Marchand Carthaginois : Intelligence et opportunisme",
      description: "Né pour négocier et prospérer, vous savez que le monde appartient à ceux qui savent s'adapter. Carthage était une puissance marchande redoutable et vous partagez son esprit visionnaire. Vous anticipez les opportunités, savez manipuler le pouvoir dans l'ombre et préférez la ruse à la force brute.",
      icon: parthenon,
      quote: "Votre devise : \"L'or et l'intelligence valent plus que mille épées.\"",
      historicalFigures: "Personnalités historiques proches : Ramsès II, Cléopâtre, Imhotep."
    },
    {
      image: grece,
      title: "Le Penseur Grec : Philosophie et savoir avant tout",
      description: "Vous appartenez à un monde de rites, de symboles et de traditions sacrées. Pour vous, la vie et la mort ne sont que des étapes d'un cycle plus grand. Vous êtes en quête de stabilité, de sagesse et d'une vérité cachée derrière le visible. Vous avez une âme mystique, profonde et attachée aux valeurs ancestrales.",
      icon: parthenon,
      quote: "Votre devise : \"L'éternité commence aujourd'hui.\"",
      historicalFigures: "Personnalités historiques proches : Ramsès II, Cléopâtre, Imhotep."
    }
  ];

  return (
    <div className={styles.cards}>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Cards;
