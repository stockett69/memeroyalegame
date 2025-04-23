import { ConnectButton } from '@rainbow-me/rainbowkit'

function PresaleWidget() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-purple-500 w-full md:w-80">
      <h2 className="text-xl font-bold text-purple-400 mb-4">MRC Presale</h2>
      <ConnectButton />
    </div>
  )
}

export default PresaleWidget