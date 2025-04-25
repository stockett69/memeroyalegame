import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, coinbaseWallet, walletConnectWallet, phantomWallet } from '@rainbow-me/rainbowkit/wallets';

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'Meme Royale Game',
  projectId: 'f1156663128b123609d7ca8ca861d973',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  metadata: {
    name: 'Meme Royale Game',
    url: 'https://www.memeroyalegame.com',
    description: 'Meme Royale Game Presale',
    icons: ['https://www.memeroyalegame.com/favicon.ico']
  },
  wallets: [
    {
      groupName: 'Popular',
      wallets: [
        phantomWallet,
        metaMaskWallet,
        coinbaseWallet,
        walletConnectWallet
      ]
    }
  ]
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);