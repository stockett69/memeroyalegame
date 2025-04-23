function Header() {
  return (
    <header className="sticky top-0 bg-gray-800 border-b border-purple-500 z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-400">Meme Royale Game</h1>
        <div className="flex gap-4">
          <a href="https://x.com/MemeRoyaleGame" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://t.me/+C4fJoHlaRRFkMGIx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
            <i className="fab fa-telegram-plane"></i>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header