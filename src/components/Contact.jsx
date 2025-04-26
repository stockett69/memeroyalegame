function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <p>Email: <a href="mailto:support@memeroyalegame.com" className="footer-link">support@memeroyalegame.com</a></p>
      <div className="social-links">
        <a href="https://x.com/MemeRoyaleGame" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X">
          <i className="fab fa-x-twitter"></i>
          <span className="icon-fallback">X</span>
        </a>
        <a href="https://t.me/+C4fJoHlaRRFkMGIx" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram">
          <i className="fab fa-telegram-plane"></i>
          <span className="icon-fallback">Telegram</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;