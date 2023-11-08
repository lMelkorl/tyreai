// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import NavbarComponent from './components/Navbar/NavbarComponent'
import FooterComponent from './components/footer/FooterComponent'
export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
        <NavbarComponent/>
      {children}
      <div className="mt-20">
      <FooterComponent/>
      </div>
    </NextUIProvider>
  )
}