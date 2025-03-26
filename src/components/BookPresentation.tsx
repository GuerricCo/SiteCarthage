import styles from '../styles/BookPresentation.module.css';
import livre from '../assets/img/livre.png';

const BookPresentation: React.FC = () => {
  return (
    <div className={styles.sectionBook} id='livre'>
      <h2 className={styles.title}>LES LARMES DU MOLOSSE</h2>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>
            Après un demi-siècle de paix fragile, l'Aigle romain déploie à nouveau ses ailes.
            Sous l'influence d'une élite avide de conquêtes, la République rallume la flamme
            de la guerre contre son ancienne rivale, déjà à genoux : Carthage.
            Flavius, fils de sénateur promis à une vie d'insouciance et de prestige, voit son monde
            basculer lorsque des forces obscures le précipitent dans un labyrinthe de dangers et de mystères.
            À travers les intrigues du Sénat, les champs de bataille et des révélations inattendues,
            il découvre que son destin est indissociable de la fin d'une époque… pour le meilleur comme
            pour le pire.
          </p>
          {/* Changer le http pour amazon */}
          <button className={styles.button} onClick={() => window.open("https://www.youtube.com/watch?v=r9lwPZK4abc", "_blank")}>
  Acheter
</button>

        </div>

        <img src={livre} alt="Les Larmes du Molosse" className={styles.image} />
      </div>
    </div>
  );
};

export default BookPresentation;