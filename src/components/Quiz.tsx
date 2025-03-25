import { useState } from 'react';
import styles from '../styles/StartScreen.module.css';

type Civilization = 'romain' | 'carthaginois' | 'grec' | 'egyptien';

const questions = [
  {
    question: "Un conflit éclate dans ta cité. Comment réagis-tu ?",
    answers: [
      { text: "Tu mobilises immédiatement une armée et impose l'ordre par la force.", type: "romain" as Civilization },
      { text: "Tu envoies tes espions pour comprendre la situation et en tirer profit.", type: "carthaginois" as Civilization },
      { text: "Tu organises une grande assemblée pour débattre des solutions stratégiques.", type: "grec" as Civilization },
      { text: "Tu consultes les prêtres et les oracles pour connaître la volonté des dieux.", type: "egyptien" as Civilization }
    ]
  },
  {
    question: "Quel serait ton rôle idéal dans l'Antiquité ?",
    answers: [
      { text: "Un général de légion, bâtissant la gloire de Rome sur les champs de bataille.", type: "romain" as Civilization },
      { text: "Un marchand influent, naviguant d'un port à l'autre en quête de richesse.", type: "carthaginois" as Civilization },
      { text: "Un philosophe, toujours prêt à débattre et à remettre en question l'ordre établi.", type: "grec" as Civilization },
      { text: "Un prêtre ou un scribe, gardien des secrets des pharaons et des dieux.", type: "egyptien" as Civilization }
    ]
  },
  {
    question: "Quelle est ta plus grande qualité ?",
    answers: [
      { text: "La discipline et la rigueur.", type: "romain" as Civilization },
      { text: "L'intelligence et la ruse.", type: "carthaginois" as Civilization },
      { text: "La curiosité et la soif de savoir.", type: "grec" as Civilization },
      { text: "La sagesse et la spiritualité.", type: "egyptien" as Civilization }
    ]
  },
  {
    question: "Quel type d'arme choisirais-tu pour partir au combat ?",
    answers: [
      { text: "Le glaive et le bouclier, parfaits pour les formations militaires.", type: "romain" as Civilization },
      { text: "Une lance, utilisée par la cavalerie et les éléphants de guerre.", type: "carthaginois" as Civilization },
      { text: "Un doru et un casque corinthien, pour ressembler à un hoplite.", type: "grec" as Civilization },
      { text: "Un arc et des flèches, pour frapper avec précision à distance.", type: "egyptien" as Civilization }
    ]
  },
  {
    question: "Un étranger arrive dans ta cité. Que fais-tu ?",
    answers: [
      { text: "Tu évalues son utilité et décide s'il doit être allié ou ennemi.", type: "romain" as Civilization },
      { text: "Tu négocie immédiatement avec lui pour obtenir un avantage.", type: "carthaginois" as Civilization },
      { text: "Tu lui offres du vin et engage une discussion philosophique.", type: "grec" as Civilization },
      { text: "Tu le fais interroger par les prêtres avant de lui accorder audience.", type: "egyptien" as Civilization }
    ]
  },
  {
    question: "Quelle est ta relation avec les dieux ?",
    answers: [
      { text: "Tu respectes les rituels, mais tu te concentres surtout sur la grandeur de ton empire.", type: "romain" as Civilization },
      { text: "Tu es prêt à leur offrir de grands sacrifices pour t'attirer leurs faveurs.", type: "carthaginois" as Civilization },
      { text: "Tu remets en question leur existence, mais apprécies les mythes et leurs enseignements.", type: "grec" as Civilization },
      { text: "Tu crois que ton destin est écrit et qu'ils influencent chaque aspect de ta vie.", type: "egyptien" as Civilization }
    ]
  },
  {
    question: "Tu peux construire un monument éternel. Que choisis-tu ?",
    answers: [
      { text: "Un immense amphithéâtre pour glorifier les jeux et la puissance de Rome.", type: "romain" as Civilization },
      { text: "Un port colossal, centre névralgique du commerce et des échanges.", type: "carthaginois" as Civilization },
      { text: "Une bibliothèque remplie de tout le savoir du monde.", type: "grec" as Civilization },
      { text: "Une pyramide qui défie le temps et assure ton passage dans l'au-delà.", type: "egyptien" as Civilization }
    ]
  },
  {
    question: "Quel est ton rapport à la guerre ?",
    answers: [
      { text: "Un outil indispensable pour asseoir la domination et le respect.", type: "romain" as Civilization },
      { text: "Une nécessité stratégique, menée avec ruse et intelligence.", type: "carthaginois" as Civilization },
      { text: "Un affrontement où la tactique et l'héroïsme font toute la différence.", type: "grec" as Civilization },
      { text: "Un fléau, mais un mal parfois nécessaire pour maintenir l'ordre divin.", type: "egyptien" as Civilization }
    ]
  },
  {
    question: "Quel est ton rapport à l'art et à la culture ?",
    answers: [
      { text: "Tu apprécies les œuvres monumentales et les fresques glorifiant la guerre.", type: "romain" as Civilization },
      { text: "Tu apprécies l'art venu de toutes les cultures que tu rencontres.", type: "carthaginois" as Civilization },
      { text: "La sculpture, la poésie et le théâtre sont essentiels à l'humanité.", type: "grec" as Civilization },
      { text: "L'art est sacré et doit honorer les dieux et l'au-delà.", type: "egyptien" as Civilization }
    ]
  },
  {
    question: "Si tu devais fonder une cité, où l'installerais-tu ?",
    answers: [
      { text: "Au cœur d'une vallée, avec des routes stratégiques pour asseoir ta domination.", type: "romain" as Civilization },
      { text: "Sur une côte, pour devenir une puissance commerciale incontournable.", type: "carthaginois" as Civilization },
      { text: "Sur une île ou près d'un port, pour favoriser les échanges et la culture.", type: "grec" as Civilization },
      { text: "Le long d'un grand fleuve, garant de la prospérité et de la vie.", type: "egyptien" as Civilization }
    ]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<Civilization, number>>({
    romain: 0,
    carthaginois: 0,
    grec: 0,
    egyptien: 0
  });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (type: Civilization) => {
    setScores((prevScores) => ({
      ...prevScores,
      [type]: prevScores[type] + 1,
    }));

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    const highestScore = Math.max(...Object.values(scores));
    return Object.keys(scores).find(
      (key) => scores[key as Civilization] === highestScore
    );
  };

  return (
    <div className={styles.quizContainer}>
      {finished ? (
        <div className={styles.textCenter}>
          <h3 className={styles.quizResult}>Vous êtes {getResult()} !</h3>
        </div>
      ) : (
        <div className={styles.quizQuestionHover}>
          <h3 className={styles.quizQuestion}>{questions[currentQuestion].question}</h3>
          <div className={styles.quizAnswers}>
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.type)}
                className={styles.quizAnswer}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;