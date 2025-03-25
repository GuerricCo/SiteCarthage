import React from "react";
import styles from '../styles/Card.module.css';

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
      <h4 className={styles.title}>{title}</h4>
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
      image: "/roman-strategist.png",
      title: "Le Stratège Romain : Discipline et conquête avant tout !",
      description: "Vous êtes un bâtisseur d'empire, un meneur d'hommes prêt à tout pour imposer l'ordre et la grandeur...",
      icon: "/roman-icon.png",
      quote: "Veni, vidi, vici! – Je suis venu, j’ai vu, j’ai vaincu.",
      historicalFigures: "Personnalités historiques proches : Jules César, Scipion l’Africain, Auguste."
    },
    {
      image: "/roman-strategist.png",
      title: "Le Stratège Romain : Discipline et conquête avant tout !",
      description: "Vous êtes un bâtisseur d'empire, un meneur d'hommes prêt à tout pour imposer l'ordre et la grandeur...",
      icon: "/roman-icon.png",
      quote: "Veni, vidi, vici! – Je suis venu, j’ai vu, j’ai vaincu.",
      historicalFigures: "Personnalités historiques proches : Jules César, Scipion l’Africain, Auguste."
    },
    {
      image: "/roman-strategist.png",
      title: "Le Stratège Romain : Discipline et conquête avant tout !",
      description: "Vous êtes un bâtisseur d'empire, un meneur d'hommes prêt à tout pour imposer l'ordre et la grandeur...",
      icon: "/roman-icon.png",
      quote: "Veni, vidi, vici! – Je suis venu, j’ai vu, j’ai vaincu.",
      historicalFigures: "Personnalités historiques proches : Jules César, Scipion l’Africain, Auguste."
    },
    {
      image: "/roman-strategist.png",
      title: "Le Stratège Romain : Discipline et conquête avant tout !",
      description: "Vous êtes un bâtisseur d'empire, un meneur d'hommes prêt à tout pour imposer l'ordre et la grandeur...",
      icon: "/roman-icon.png",
      quote: "Veni, vidi, vici! – Je suis venu, j’ai vu, j’ai vaincu.",
      historicalFigures: "Personnalités historiques proches : Jules César, Scipion l’Africain, Auguste."
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
