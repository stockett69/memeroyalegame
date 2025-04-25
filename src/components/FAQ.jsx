import { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Meme Royale Coin?',
      answer: 'Meme Royale Coin (MRC) is a cryptocurrency for the Meme Royale Game, enabling in-game purchases and rewards.'
    },
    {
      question: 'How do I buy MRC?',
      answer: 'Connect your wallet, enter an ETH amount (min 0.001), and click "Buy MRC" in the presale section.'
    },
    {
      question: 'Which wallets are supported?',
      answer: 'Use MetaMask, Phantom, or any WalletConnect-compatible wallet. On mobile, scan the QR code or copy the link to your dApp browser.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className={`collapsible ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div className={`content ${activeIndex === index ? 'active' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ