import styles from '../styles/AuthorSection.module.css';
import author from '../assets/img/author.png';

const AuthorSection: React.FC = () => {
  return (
    <div className={styles.sectionAuthor} id='auteur'>
      <img src={author} alt="Auteur" className={styles.image} />
      <div className={styles.container}>
        <h2 className={styles.title}>À Propos de Moi</h2>
        <p className={styles.description}>Bonjour ! Je suis Stanislas Margotton, un jeune écrivain passionné d'Histoire.
          Après un parcours orienté vers le commerce et l'entrepreneuriat, je signe mon premier roman intitulé
          Les Larmes du Molosse. Il s’agit d’une fresque épique qui plonge le lecteur au cœur de la chute de Carthage,
          assiégée par les terribles légions romaines.
          À travers un récit haletant, porté par des personnages confrontés à une épopée guerrière, je fais revivre une histoire
          devenue légende. Bonne lecture !</p>
      </div>
    </div>
  );
};

export default AuthorSection;