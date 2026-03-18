import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tatiana & Daniel · 4 de Junho de 2026',
  description: 'Junte-se a nós para celebrar o casamento de Tatiana e Daniel na Quinta dos Castanheiros, Pombal.',
  icons: {
    icon: [
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon.ico' },
    ],
    apple: '/images/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Tatiana & Daniel · 4 de Junho de 2026',
    description: 'Estão cordialmente convidados para o nosso casamento em Pombal, Leiria.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
