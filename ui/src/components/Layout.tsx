import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className='flex flex-col min-h-screen'>
    <Header />
    <main className='flex-grow mx-auto max-w-3xl'>{children}</main>
    <Footer />
  </div>
)
