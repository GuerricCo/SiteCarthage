import AuthorSection from './components/AuthorSection';
import BookPresentation from './components/BookPresentation';
import HeroSection from './components/HeroSection';
import StartScreen from './components/StartScreen';
import CardSection from './components/CardSection';
import SaviezVous from './components/SaviezVous';

const App = () => {
  return (
    <div>
      <HeroSection />
      <BookPresentation/>
      <AuthorSection/>
      <StartScreen/>
      <CardSection/>
      <SaviezVous/>
    </div>
  );
};

export default App;
