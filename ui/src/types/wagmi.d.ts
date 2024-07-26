import type { wagmiConfig } from '@/config'

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig
  }
}
