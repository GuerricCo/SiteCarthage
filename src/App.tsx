import AuthorSection from './components/AuthorSection';
import BookPresentation from './components/BookPresentation';
import HeroSection from './components/HeroSection';
import StartScreen from './components/StartScreen';
import CardSection from './components/CardSection';
import SaviezVous from './components/SaviezVous';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <HeroSection />
      <BookPresentation/>
      <AuthorSection/>
      <StartScreen/>
      <CardSection/>
      <SaviezVous/>
      <Footer/>
    </div>
  );
};

export default App;
