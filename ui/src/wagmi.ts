import { createConfig, fallback, http, webSocket } from 'wagmi'
import { foundry, goerli, mainnet } from 'wagmi/chains'
import {coinbaseWallet, injected, metaMask, walletConnect } from 'wagmi/connectors'

// TODO
const walletConnectProjectId = 'UPDATE'

export const config = createConfig({
  chains: [mainnet, goerli, foundry],
  connectors: [coinbaseWallet(), injected(), metaMask(), walletConnect( { projectId: walletConnectProjectId })],
  transports: {
    [mainnet.id]: fallback([webSocket(), http()]),
    [goerli.id]: fallback([webSocket(), http()]),
    [foundry.id]: fallback([webSocket(), http()]),
  }

})
