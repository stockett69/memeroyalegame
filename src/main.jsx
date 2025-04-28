import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { RainbowKitProvider, lightTheme, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { mainnet } from 'wagmi/chains';
import { metaMaskWallet, coinbaseWallet, walletConnectWallet, phantomWallet } from '@rainbow-me/rainbowkit/wallets';

const queryClient = new QueryClient();

// Create connectors for RainbowKit wallets
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Popular',
      wallets: [
        ({ chains }) => ({ ...phantomWallet({ chains }), hidden: () => false }), // Force Phantom visibility
        metaMaskWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    appName: 'Meme Royale Game',
    projectId: 'f1156663128b123609d7ca8ca861d973', // Replace with your valid WalletConnect project ID
  }
);

// Create a proper Wagmi config using createConfig
const config = createConfig({
  chains: [mainnet],
  connectors,
  transports: {
    [mainnet.id]: http(),
  },
  ssr: false,
});

// Component to dynamically set modalSize based on screen width
function AppWrapper() {
  const [modalSize, setModalSize] = useState(window.innerWidth > 768 ? 'compact' : 'compact');

  useEffect(() => {
    const handleResize = () => {
      setModalSize(window.innerWidth > 768 ? 'wide' : 'compact');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize={modalSize} theme={lightTheme()}>
            <BrowserRouter
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
              }}
            >
              <App />
            </BrowserRouter>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AppWrapper />);