// src/components/Home.jsx
import PresaleWidget from './PresaleWidget';

function Home() {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-content container">
        <h2>Welcome to Meme Royale Game</h2>
        <p className="tagline" style={{ color: 'white' }}>
          JOIN THE ULTIMATE MEME COIN GAMING EXPERIENCE!
        </p>
        <div className="image-presale-container">
          <div className="presale-widget-wrapper">
            <PresaleWidget title="Presale" />
          </div>
        </div>
        <div className="extra-content">
          <h3>Discover Meme Royale Game</h3>
          <p>
            Meme Royale Game brings together the best of meme culture and
            blockchain gaming. Collect meme-based NFTs, battle with friends, and
            earn MRC tokens as you play. Our vibrant community is growing every
            day—join us now!
          </p>
          <p>
            Whether you’re a gamer, a meme enthusiast, or a crypto collector, Meme
            Royale Game offers something for everyone. Stay tuned for updates as
            we continue to develop new features and expand our ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;