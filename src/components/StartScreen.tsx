import { useState } from 'react';
import Quiz from './Quiz';
import quizzImg from '../assets/img/quizz.png';
import styles from '../styles/StartScreen.module.css';
import logo from '../assets/img/logo_larme_molosse_white.png';

const StartScreen = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className={styles.startScreen}>
      <div className={styles.container}>
        <div className={styles.titleLogo}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <h2 className={styles.title}>QUIZZ : QUEL PEUPLE ANTIQUE ES-TU ?</h2>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>

        {startQuiz ? (
          <Quiz />
        ) : (
          <div>
            <img 
              className={`${styles.img} ${startQuiz ? styles.hide : ''}`} 
              src={quizzImg} 
              alt="Image Quizz" 
            />
            <button onClick={() => setStartQuiz(true)} className={styles.startButton}>
              Commencer le test
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartScreen;
