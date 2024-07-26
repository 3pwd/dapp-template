'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'

import { projectId, wagmiConfig } from '@/config'
import { createWeb3Modal } from '@web3modal/wagmi'

const queryClient = new QueryClient()
createWeb3Modal({ projectId, wagmiConfig })

export const Providers = ({ children, initialState }: {
  children: ReactNode
  initialState?: State
}) => (
  <WagmiProvider config={wagmiConfig} initialState={initialState}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </WagmiProvider>
)
