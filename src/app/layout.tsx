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
  title: 'MBT Edge - Digital Talent Solutions | RPO, KPO & Staffing Services',
  description: 'MBT Edge delivers cutting-edge RPO, KPO, staffing solutions, and Retail Pro POS systems to help businesses streamline operations, reduce costs, and scale smarter.',
  keywords: 'MBT Edge, RPO, KPO, staffing, business solutions, digital talent, recruitment, outsourcing, consulting, Retail Pro, POS, Point of Sale, Inventory Management',
  openGraph: {
    title: 'MBT Edge - Digital Talent Solutions | RPO, KPO & Staffing Services',
    description: 'MBT Edge delivers cutting-edge RPO, KPO, staffing solutions, and Retail Pro POS systems to help businesses streamline operations, reduce costs, and scale smarter.',
    url: 'https://mbtedge.com',
    siteName: 'MBT Edge',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'MBT Edge Logo'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBT Edge - Digital Talent Solutions | RPO, KPO & Staffing Services',
    description: 'MBT Edge delivers cutting-edge RPO, KPO, staffing solutions, and Retail Pro POS systems to help businesses streamline operations.',
    images: ['/logo.png']
  },
  icons: {
    icon: '/logo.png'
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
