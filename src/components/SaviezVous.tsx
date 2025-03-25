import React from "react";
import Accordeon from "./Accordeon";
import styles from '../styles/Accordeon.module.css';
import logo1 from '../assets/img/ROND1.png';
import logo2 from '../assets/img/ROND2.png';

const SaviezVous: React.FC = () => {
    return (
        <div className={styles.saviezVous} id="saviez-vous">
            <div className={styles.container}>
                <div className={styles.titleLogo}>
                    <img className={styles.logo} src={logo1} alt="Logo" />
                    <h2 className={styles.title}>Le Saviez-vous?</h2>
                    <img className={styles.logo} src={logo2} alt="Logo" />
                </div>
                <Accordeon />
            </div>
        </div>
    );
};

export default SaviezVous;