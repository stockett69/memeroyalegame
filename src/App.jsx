import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Lightning from './components/Lightning';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import GamePlayPreview from './components/GamePlayPreview'; // Ensure this import is present
import Community from './components/Community';
import Team from './components/Team';
import Faq from './components/Faq';
import Whitepaper from './components/Whitepaper';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Lightning />
      <div className="container">
        <Header />
        <Nav />
        <div>
          <Home />
          <About />
          <Tokenomics />
          <GamePlayPreview />
          <Community />
          <Team />
          <Faq />
          <Whitepaper />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;