import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import GameplayPreview from './components/GameplayPreview';
import Community from './components/Community';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Whitepaper from './components/Whitepaper';
import Contact from './components/Contact';
import Lightning from './components/Lightning';

function App() {
  // Set the document title after all components render
  useEffect(() => {
    document.title = "Meme Royale Game - MRC Presale";
  }, []);

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <nav>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#tokenomics" onClick={toggleMenu}>Tokenomics</a></li>
          <li><a href="#gameplay-preview" onClick={toggleMenu}>Gameplay</a></li>
          <li><a href="#community" onClick={toggleMenu}>Community</a></li>
          <li><a href="#team" onClick={toggleMenu}>Team</a></li>
          <li><a href="#faq" onClick={toggleMenu}>FAQ</a></li>
          <li><a href="#whitepaper" onClick={toggleMenu}>Whitepaper</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
      <Home />
      <About />
      <Tokenomics />
      <GameplayPreview />
      <Community />
      <Team />
      <FAQ />
      <Whitepaper />
      <Contact />
      <Lightning />
    </div>
  );
}

export default App;