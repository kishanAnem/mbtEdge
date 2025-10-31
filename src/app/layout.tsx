import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import HeaderWrapper from '@/components/layout/HeaderWrapper'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

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
  metadataBase: new URL('https://mbtedge.com'),
  title: 'MBTEdge (MBT Edge) - Digital Talent Solutions | RPO, KPO & Staffing Services',
  description: 'MBTEdge (also known as MBT Edge) delivers RPO, KPO, staffing solutions, and Retail Pro POS systems to help businesses streamline operations, reduce costs, and scale smarter.',
  keywords: 'MBTEdge, MBT Edge, RPO, KPO, staffing, tech staffing agency, business solutions, digital talent, recruitment, outsourcing, consulting, Retail Pro, POS, Point of Sale, Inventory Management',
  openGraph: {
    title: 'MBTEdge (MBT Edge) - Digital Talent Solutions | RPO, KPO & Staffing Services',
    description: 'MBTEdge (MBT Edge) delivers cutting-edge RPO, KPO, staffing solutions, and Retail Pro POS systems to help businesses streamline operations, reduce costs, and scale smarter.',
    url: 'https://mbtedge.com',
    siteName: 'MBTEdge',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'MBTEdge Logo'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBTEdge (MBT Edge) - Digital Talent Solutions | RPO, KPO & Staffing Services',
    description: 'MBTEdge (MBT Edge) delivers cutting-edge RPO, KPO, staffing solutions, and Retail Pro POS systems to help businesses streamline operations.',
    images: ['/logo.png']
  },
  icons: {
    icon: '/favicon.png'
  },
  alternates: {
    canonical: 'https://mbtedge.com'
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
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MBT Edge" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://mbtedge.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MBT Edge",
              "url": "https://mbtedge.com",
              "logo": "https://mbtedge.com/logo.png",
              "description": "MBT Edge delivers cutting-edge RPO, KPO, staffing solutions, and Retail Pro POS systems to help businesses streamline operations, reduce costs, and scale smarter.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://linkedin.com/company/mbtedge",
                "https://twitter.com/mbtedge"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <HeaderWrapper />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
