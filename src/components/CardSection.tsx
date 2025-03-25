import React from "react";
import Cards from "./Cards";
import styles from '../styles/Card.module.css';

const CardSection: React.FC = () => {
  return (
    <div>
      <div className={styles.cardSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>Description Roles</h2>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
