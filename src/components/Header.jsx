function Header() {
  return (
    <header>
      <div className="header-content container">
        <h1>Meme Royale Game</h1>
        <div className="social-links">
          <a href="https://x.com/MemeRoyaleGame" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i> X
          </a>
          <a href="https://t.me/+C4fJoHlaRRFkMGIx" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram-plane"></i> Telegram
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header