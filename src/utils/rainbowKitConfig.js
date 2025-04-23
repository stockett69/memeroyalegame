import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'viem'
import { mainnet } from 'viem/chains'

export const config = getDefaultConfig({
  appName: 'Meme Royale Game',
  projectId: 'f1156663128b123609d7ca8ca861d973',
  chains: [mainnet],
  transports: {
    [mainnet.id]: http()
  },
  ssr: false,
  appDescription: 'MRC Presale',
  appUrl: 'https://memeroyalegame.com',
  appIcon: 'https://memeroyalegame.com/images/favicon.ico'
})