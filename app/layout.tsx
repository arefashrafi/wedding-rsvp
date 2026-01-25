import type { Metadata } from 'next'
import { Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import FlowerBackground from './components/FlowerBackground'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'RSVP Sueun & Aref',
  description: 'RSVP for the wedding of Sueun & Aref'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/vte7ahn.css' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#FCF8E7' }}
      >
        <FlowerBackground />
        <Navbar />
        <div className='relative' style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
