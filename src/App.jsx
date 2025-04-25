import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import PresaleWidget from './components/PresaleWidget';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Faq from './components/Faq';
import Whitepaper from './components/Whitepaper';
import Contact from './components/Contact';
import Community from './components/Community';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Home />
      <About />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Faq />
      <Whitepaper />
      <Contact />
      <Community />
      <div className="presale-root">
        <PresaleWidget />
      </div>
    </>
  );
}

export default App;