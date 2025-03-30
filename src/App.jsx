import { useState } from 'react'
import './App.css'
import Navbar from './components/elements/Navbar'
import Hero from './components/elements/Hero'
import WalletConnect from './components/modals/WalletConnect'
import PostCard from './components/elements/PostCard'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import Home from './pages/home/Home'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = import.meta.env.VITE_PROJECT_ID

// 2. Create a metadata object - optional
const metadata = {
  name: 'Lenster',
  description: 'Lenster',
  url: 'https://lenster.io', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set the networks
const networks = [mainnet, arbitrum]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

function App() {


  return (
    <>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <Navbar/>
          <Home/>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
