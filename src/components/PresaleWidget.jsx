// src/components/PresaleWidget.jsx
import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract, useWriteContract, useBalance, useDisconnect } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import axios from 'axios';
import { contractABI, contractAddress } from '../contracts/contractABI.js';

function PresaleWidget({ title = 'Presale' } = {}) { // Add customizable title prop with default
  const [ethAmount, setEthAmount] = useState('0.001');
  const [mrcAmount, setMrcAmount] = useState(260);
  const [countdown, setCountdown] = useState('');
  const [ethPriceUSD, setEthPriceUSD] = useState(2000);
  const [usdRaised, setUsdRaised] = useState(0);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { writeContract, error: writeError } = useWriteContract();

  // Fetch ETH balance
  const { data: balance, error: balanceError, refetch: refetchBalance } = useBalance({
    address,
    query: {
      retry: 3,
      retryDelay: 1000,
      staleTime: 60 * 1000,
    },
  });

  // Fetch total raised only once on page load
  const { data: totalRaised, error: totalRaisedError } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: 'totalRaised',
    query: {
      retry: 0,
      poll: false,
    },
  });

  // Fetch ETH price from CoinGecko
  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        setEthPriceUSD(response.data.ethereum.usd || 2000);
      } catch (error) {
        console.error('Error fetching ETH price:', error);
        setEthPriceUSD(2000);
      }
    };
    fetchEthPrice();
  }, []);

  // Update USD raised based on totalRaised
  useEffect(() => {
    if (totalRaised) {
      const ethRaised = parseFloat(formatEther(totalRaised));
      setUsdRaised(ethRaised * ethPriceUSD);
    }
  }, [totalRaised, ethPriceUSD]);

  // Countdown timer
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

  // Calculate MRC amount
  useEffect(() => {
    const eth = parseFloat(ethAmount) || 0;
    const tokensPerEth = 260 / 0.001;
    setMrcAmount(Math.floor(eth * tokensPerEth));
  }, [ethAmount]);

  // Buy MRC
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
      <h2>{title}</h2> {/* Use h2 with customizable title */}
      {address && (
        <p className="presale-text">
          Your ETH Balance: {balanceError || !balance ? '0.00' : parseFloat(formatEther(balance.value)).toFixed(2)} ETH
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
        {({ account, chain, openConnectModal }) => (
          <button
            onClick={account ? disconnect : openConnectModal}
            className="presale-button"
          >
            {account ? 'Disconnect' : 'Connect Wallet'}
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