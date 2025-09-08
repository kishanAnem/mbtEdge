import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'MBT Edge - Empowering Your Business with Tailored Digital Talent Solutions',
  description: 'MBT Edge delivers cutting-edge RPO, KPO, and staffing solutions to help your business streamline operations, reduce costs, and scale smarter.',
  icons: {
    icon: '/logo.png', // ← Add this if you want logo as favicon
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}> 
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MBT Edge delivers cutting-edge RPO, KPO, and staffing solutions to help your business streamline operations, reduce costs, and scale smarter." />
        <meta name="keywords" content="MBT Edge, RPO, KPO, staffing, business solutions, digital talent, recruitment, outsourcing, consulting" />
        <meta name="author" content="MBT Edge" />
        <meta property="og:title" content="MBT Edge - Empowering Your Business with Tailored Digital Talent Solutions" />
        <meta property="og:description" content="MBT Edge delivers cutting-edge RPO, KPO, and staffing solutions to help your business streamline operations, reduce costs, and scale smarter." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://mbtedge.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MBT Edge - Empowering Your Business with Tailored Digital Talent Solutions" />
        <meta name="twitter:description" content="MBT Edge delivers cutting-edge RPO, KPO, and staffing solutions to help your business streamline operations, reduce costs, and scale smarter." />
        <meta name="twitter:image" content="/logo.png" />
        
  <meta name="keywords" content="Retail Pro, POS, Point of Sale, Inventory Management, Retail Software, MBT Edge Retail Pro" />
  <meta name="description" content="MBT Edge offers Retail Pro POS solutions for advanced retail management, inventory control, and seamless point of sale operations." />
  <meta property="og:title" content="Retail Pro POS Solutions by MBT Edge" />
  <meta property="og:description" content="MBT Edge provides Retail Pro POS software for efficient retail management, inventory tracking, and business growth." />
  <meta property="og:image" content="/assets/RetailProPOS.png" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="Retail Pro POS Solutions by MBT Edge" />
  <meta name="twitter:description" content="MBT Edge provides Retail Pro POS software for efficient retail management, inventory tracking, and business growth." />
  <meta name="twitter:image" content="/assets/RetailProPOS.png" />
        <link rel="icon" href="/logo-s2.png" />
        <title>MBT Edge - Empowering Your Business with Tailored Digital Talent Solutions</title>
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
