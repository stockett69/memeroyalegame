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
        <div className="video-group">
          <video
            controls
            playsInline
            poster="/images/Doge-vs-warrior-final.webp"
            onClick={() => console.log('Video clicked')}
            onError={(e) => console.error('Video error:', e.target.error ? e.target.error.message : 'Unknown error')}
          >
            <source src="/images/Sale Pitch video.mp4" type="video/mp4" />
            <source src="/images/fallback-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default About;