function Nav() {
    const navItems = [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#tokenomics', label: 'Tokenomics' },
      { href: '#presale', label: 'Presale' },
      { href: '#roadmap', label: 'Roadmap' },
      { href: '#team', label: 'Team' },
      { href: '#community', label: 'Community' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact' }
    ]
  
    return (
      <nav className="sticky top-[72px] bg-gray-800 border-b border-purple-500 z-40 py-2">
        <ul className="container mx-auto px-4 flex justify-center gap-4 flex-wrap">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-white hover:text-purple-400 font-bold text-sm md:text-base">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  
  export default Nav