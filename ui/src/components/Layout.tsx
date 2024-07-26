import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className='flex flex-col min-h-full'>
    <Header />
    <main className='flex-grow mx-auto flex flex-col gap-y-10 mt-6 items-center'>{children}</main>
    <Footer />
  </div>
)
