import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import type { ReactNode } from 'react'
import { cookieToInitialState } from 'wagmi'

import { metadata as _metadata, wagmiConfig } from '@/config'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })
const { name: title, description } = _metadata

export const metadata: Metadata = {
  title,
  description,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  )
}
