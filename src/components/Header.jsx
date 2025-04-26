function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Meme Royale Game Presale</h1>
          <div className="social-links-above-nav">
            <a href="https://x.com/MemeRoyaleGame" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X">
              <i className="fab fa-x-twitter"></i>
              <span className="icon-fallback">X</span>
            </a>
            <a href="https://t.me/+C4fJoHlaRRFkMGIx" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram">
              <i className="fab fa-telegram-plane"></i>
              <span className="icon-fallback">Telegram</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;