import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { mainnet, sepolia } from 'wagmi/chains'

const _projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID
if (!_projectId) throw new Error('NEXT_PUBLIC_WC_PROJECT_ID is not set')

const chains = [mainnet, sepolia] as const

export const projectId = _projectId as string

export const metadata = {
  name: 'Dapp template',
  description: 'A TS/Next template for creating a Dapp',
  url: 'http://localhost:3000',
  icons: ['http://localhost:3000/favicon.ico'],
}

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})
