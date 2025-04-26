import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';
import './components/Lightning.css';
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { mainnet } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, coinbaseWallet, walletConnectWallet, phantomWallet } from '@rainbow-me/rainbowkit/wallets';

const queryClient = new QueryClient();

const appUrl = 'https://www.memeroyalegame.com';

const config = getDefaultConfig({
  appName: 'Meme Royale Game',
  projectId: 'f1156663128b123609d7ca8ca861d973',
  chains: [mainnet],
  ssr: false,
  appUrl: appUrl,
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
        <RainbowKitProvider modalSize="compact" theme={lightTheme({ borderRadius: 'large' })}>
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