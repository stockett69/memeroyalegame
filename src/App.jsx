import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import GamePlayPreview from './components/GamePlayPreview';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Faq from './components/Faq';
import Whitepaper from './components/Whitepaper';
import Contact from './components/Contact';
import Community from './components/Community';
import Lightning from './components/Lightning';

function App() {
  return (
    <div className="app-wrapper">
      <Lightning />
      <Header />
      {/* <Nav /> */}
      {/* <Home /> */}
      {/* <About /> */}
      <GamePlayPreview />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Faq />
      <Whitepaper />
      <Contact />
      <Community />
    </div>
  );
}

export default App;