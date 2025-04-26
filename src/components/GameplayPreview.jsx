function GamePlayPreview() {
  return (
    <section id="gameplay-preview" className="section">
      <div className="container">
        <h2>Game Play Preview</h2>
        <p>
          As Meme Royale Game develops, we’ll be sharing exciting screenshots of gameplay right here! Stay tuned to get a sneak peek at the battles, meme-based NFTs, and the vibrant world we’re building for our community.
        </p>
        <div className="gameplay-images">
          <picture>
            <source type="image/webp" srcSet="/images/Deckcloseup.webp" />
            <img src="/images/Deckcloseup.webp" alt="Deck Closeup Preview" width="300" height="200" />
          </picture>
          <picture>
            <source type="image/webp" srcSet="/images/Deckofcards.webp" />
            <img src="/images/Deckofcards.webp" alt="Deck of Cards Preview" width="300" height="200" />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default GamePlayPreview;