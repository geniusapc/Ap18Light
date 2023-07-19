"use client"
import { Inter } from 'next/font/google'

import GlobalStyles from '../styles/GlobalStyles'
import './globals.css'
import StyledComponentsRegistry from '../lib/registry'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyles />
      <StyledComponentsRegistry>
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  )
}
