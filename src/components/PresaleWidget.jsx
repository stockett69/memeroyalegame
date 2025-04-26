// src/components/PresaleWidget.jsx
import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract, useWriteContract, useBalance, useDisconnect } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import axios from 'axios';
import { contractABI, contractAddress } from '../contracts/contractABI.js';

function PresaleWidget({ title = 'Presale' } = {}) {
  const [ethAmount, setEthAmount] = useState('0.001');
  const [mrcAmount, setMrcAmount] = useState(260);
  const [countdown, setCountdown] = useState('');
  const [ethPriceUSD, setEthPriceUSD] = useState(2000);
  const [usdRaised, setUsdRaised] = useState(0);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { writeContract, error: writeError } = useWriteContract();
  const { data: balance, error: balanceError, refetch: refetchBalance } = useBalance({
    address,
    query: {
      retry: 3,
      retryDelay: 1000,
      staleTime: 60 * 1000,
    },
  });

  const { data: totalRaised, error: readError } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: 'totalRaised'
  });

  useEffect(() => {
    if (readError) {
      console.error('Error reading totalRaised:', readError);
      setUsdRaised(0); // Fallback to 0 if the contract call fails
    }
    if (totalRaised) {
      const ethRaised = parseFloat(formatEther(totalRaised));
      setUsdRaised(ethRaised * ethPriceUSD);
    }
  }, [totalRaised, readError, ethPriceUSD]);

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const source = axios.CancelToken.source();
        const timeout = setTimeout(() => {
          source.cancel('Request timed out');
        }, 5000);
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', {
          cancelToken: source.token
        });
        clearTimeout(timeout);
        setEthPriceUSD(response.data.ethereum.usd || 2000);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setEthPriceUSD(2000);
        }
      }
    };
    fetchEthPrice();
  }, []);

  useEffect(() => {
    const endDate = new Date('2025-09-25T23:59:59Z').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = endDate - now;
      if (timeLeft <= 0) {
        setCountdown('Presale Ended');
        return;
      }
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      setCountdown(`${days}D ${hours}H ${minutes}M ${seconds}S`);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const eth = parseFloat(ethAmount) || 0;
    const tokensPerEth = 260 / 0.001;
    setMrcAmount(Math.floor(eth * tokensPerEth));
  }, [ethAmount]);

  const handleConnectClick = () => {
    const scrollY = window.scrollY;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (document.querySelector('[data-rk] [role="dialog"]')) {
          window.scrollTo(0, scrollY);
        }
        if (!document.querySelector('[data-rk] [role="dialog"]')) {
          window.scrollTo(0, scrollY);
          observer.disconnect();
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  const handleBuy = async () => {
    if (!address) {
      setTransactionStatus({ message: 'Please connect your wallet', type: 'failed' });
      return;
    }
    if (parseFloat(ethAmount) < 0.001) {
      setTransactionStatus({ message: 'Minimum purchase is 0.001 ETH', type: 'failed' });
      return;
    }
    setTransactionStatus({ message: 'Pending', type: 'pending' });
    try {
      await writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: 'buyTokens',
        value: parseEther(ethAmount),
      });
      setTransactionStatus({ message: 'Success: Transaction completed', type: 'success' });
      refetchBalance();
    } catch (error) {
      setTransactionStatus({ message: `Failed: ${error.message || 'Transaction unsuccessful'}`, type: 'failed' });
    }
  };

  const presaleGoalUsd = 400000;
  const progressPercent = Math.min((usdRaised / presaleGoalUsd) * 100, 100);

  return (
    <div className="presale-widget">
      <h2>{title}</h2>
      {address && (
        <p className="presale-text">
          Your ETH Balance: {balanceError || !balance ? '0.00' : parseFloat(formatEther(balance.value)).toFixed(2)} ETH
        </p>
      )}
      {readError && (
        <p className="presale-text" style={{ color: 'red' }}>
          Error loading total raised: {readError.message}
        </p>
      )}
      <p className="presale-text">
        Countdown: <span>{countdown}</span>
      </p>
      <p className="presale-text">
        USD Raised: ${Math.floor(usdRaised).toLocaleString()} / $400,000
      </p>
      <div className="presale-progress-bar">
        <div className="presale-progress-fill" style={{ width: `${progressPercent}%` }}></div>
      </div>
      <div className="presale-input-group">
        <label htmlFor="eth-amount" className="presale-label">
          Amount to Buy (ETH, min 0.001):
        </label>
        <input
          type="number"
          id="eth-amount"
          step="0.001"
          min="0.001"
          value={ethAmount}
          onChange={(e) => setEthAmount(e.target.value)}
          className="presale-input"
        />
      </div>
      <p className="presale-text">
        You will receive: <span>{mrcAmount.toLocaleString()} MRC</span>
      </p>
      <ConnectButton.Custom>
        {({ account, chain, openConnectModal, openAccountModal }) => (
          <button
            onClick={() => {
              if (account) {
                openAccountModal();
              } else {
                openConnectModal();
                handleConnectClick();
              }
            }}
            className="rainbow-connect-button"
          >
            {account ? account.displayName : 'Connect Wallet'}
          </button>
        )}
      </ConnectButton.Custom>
      <button
        onClick={handleBuy}
        className="presale-button"
        disabled={!address || countdown === 'Presale Ended'}
      >
        Buy MRC
      </button>
      {transactionStatus && (
        <p className={`transaction-status ${transactionStatus.type}`}>
          Transaction Status: <span>{transactionStatus.message}</span>
        </p>
      )}
      {writeError && (
        <p className="transaction-status failed">
          Transaction Error: <span>{writeError.message || 'Unknown error'}</span>
        </p>
      )}
    </div>
  );
}

export default PresaleWidget;