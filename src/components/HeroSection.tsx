import React from 'react';
import Header from './Header';
import styles from '../styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <div className={styles.hero}>
      {/* HEADER */}
      <Header />

      {/* TITRE */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          CARTHAGE ET LA ROME ANTIQUE
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
