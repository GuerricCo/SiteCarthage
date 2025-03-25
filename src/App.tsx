import AuthorSection from './components/AuthorSection';
import BookPresentation from './components/BookPresentation';
import HeroSection from './components/HeroSection';
import StartScreen from './components/StartScreen';
import CardSection from './components/CardSection';

const App = () => {
  return (
    <div>
      <HeroSection />
      <BookPresentation/>
      <AuthorSection/>
      <StartScreen/>
      <CardSection/>
    </div>
  );
};

export default App;
