// src/components/Header.jsx
function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>Meme Royale Game</h1>
        <div className="social-links">
          <a href="https://x.com/MemeRoyaleGame" className="social-icon">
            <i className="fab fa-x"></i>
          </a>
          <a href="https://t.me/+C4fJoHlaRRFkMGIx" className="social-icon">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;