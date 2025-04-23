function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">Meme Royale Game</h1>
        <p className="text-xl text-white">Be Right Back! We're upgrading our site for an epic MRC presale experience.</p>
        <p className="text-lg text-white mt-2">Check back soon or join our community for updates!</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://x.com/MemeRoyaleGame"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400"
          >
            <i className="fab fa-x-twitter"></i> X
          </a>
          <a
            href="https://t.me/+C4fJoHlaRRFkMGIx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400"
          >
            <i className="fab fa-telegram-plane"></i> Telegram
          </a>
        </div>
      </div>
    </div>
  )
}

export default App