import { useState } from "react";
import styles from "../styles/Footer.module.css";
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';
import linkedin from '../assets/img/logo-linkedin.png';
import logo from '../assets/img/logo_larme_molosse_white.png';

const Footer = () => {
    const [showNewsletter, setShowNewsletter] = useState(false);

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>

            <div className={styles.buttons}>
                <button onClick={() => setShowNewsletter(true)}>Newsletter</button>
                {/* Changer mail */}
                <button
                    className={styles.button}
                    onClick={() => window.location.href = "mailto:cochelin.guerric@hotmail.com"}>
                    Contact
                </button>

            </div>

            <div className={styles.socials}>
                <div>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="X" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
                <p>Pour plus d'histoires sur les Larmes du Molosse, rejoignez la communauté</p>
            </div>

            {showNewsletter && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={() => setShowNewsletter(false)}>✖</button>
                        <iframe
                            data-w-type="embedded"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://sliqk.mjt.lu/wgt/sliqk/x12k/form?c=efc469fd"
                            width="100%"
                            style={{ height: "500px" }}
                        ></iframe>
                        <script type="text/javascript" src="https://app.mailjet.com/pas-nc-embedded-v1.js"></script>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;