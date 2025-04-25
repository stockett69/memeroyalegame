import { useState } from 'react';

function Whitepaper() {
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    {
      title: 'Introduction to Meme Royale Coin',
      content: 'Meme Royale Coin (MRC) is the native cryptocurrency of the Meme Royale Game, designed to empower players with in-game purchases, rewards, and decentralized governance. Our mission is to create a fun, meme-driven ecosystem with real-world utility.'
    },
    {
      title: 'Tokenomics',
      content: 'MRC has a total supply of 10,000,000,000 tokens. Allocation: 40% presale (4,000,000,000 MRC), 20% liquidity (2,000,000,000 MRC), 15% team & development (1,500,000,000 MRC, locked for 2 years), 15% marketing (1,500,000,000 MRC), 10% community rewards (1,000,000,000 MRC). Staking and burn mechanisms will ensure long-term value.'
    },
    {
      title: 'Roadmap',
      content: 'Q1 2025: Launch MRC presale and build community. Q4 2025: Release alpha version of Meme Royale game for testing. Q3 2026: Beta game launch and exchange listings. Q4 2026: Full game release and expand ecosystem with partnerships.'
    },
    {
      title: 'Use Cases',
      content: 'MRC can be used for in-game purchases (skins, boosts), staking for rewards, voting on game updates, and trading on decentralized exchanges. Future integrations include NFT marketplaces and metaverse compatibility.'
    }
  ];

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="whitepaper" className="section">
      <div className="container">
        <h2>Whitepaper</h2>
        {sections.map((section, index) => (
          <div key={index}>
            <button
              className={`collapsible ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </button>
            <div className={`content ${activeIndex === index ? 'active' : ''}`}>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Whitepaper