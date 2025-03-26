import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/img/logo_larme_molosse_white.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour gérer l'ouverture/fermeture du menu burger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* LOGO */}
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Menu burger */}
        <div className={styles.burger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* NAVIGATION */}
        <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.li}>
            <a href="#livre" className={styles.navLink}>Le Livre</a>
          </li>
          <li className={styles.li}>
            <a href="#auteur" className={styles.navLink}>L'Auteur</a>
          </li>
          <li className={styles.li}>
            <a href="#quizz" className={styles.navLink}>Le Quizz</a>
          </li>
          <li className={styles.li}>
            <a href="#saviez-vous" className={styles.navLink}>Le Saviez-vous?</a>
          </li>
          <li className={styles.li}>
            <a href="#footer" className={styles.navLink}>Newsletter</a>
          </li>
          <li className={styles.li}>
            <a href="https://www.youtube.com/results?search_query=+h%C3%A9berger+reactJS+sur+hostinger" target='blanck' className={styles.cadille} id='cadille'>🛒</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
