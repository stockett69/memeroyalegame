// src/components/About.jsx
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p>
          Meme Royale Game is the ultimate meme coin gaming experience, bringing together the best of blockchain technology and fun, community-driven gameplay. Join us on this exciting journey to battle, earn, and laugh with your favorite memes!
        </p>
        <p>
          Our mission is to create a vibrant ecosystem where players can engage with meme-based NFTs, participate in thrilling battles, and earn rewards through our native MRC token. Learn more about our vision and how we’re revolutionizing the gaming world.
        </p>
        <div className="image-video-stack">
          <picture>
            <source type="image/webp" srcSet="/images/Doge-vs-warrior-final.webp" />
            <img
              src="/images/Doge-vs-warrior-final.webp"
              alt="Meme Royale Game - Doge vs Warrior"
              width="500"
              height="281"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default About;