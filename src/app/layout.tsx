import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'TyreAi',
  description: 'TyreAi app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='dark text-foreground bg-background' lang="en">
      <body>
      <Providers>
        {children}
        
    </Providers>
        </body>
    </html>
  )
}
