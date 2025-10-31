import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | MBT Edge - .NET Development, AI Solutions & Staffing Insights',
  description: 'Explore expert insights, best practices, and technical expertise in .NET development, AI solutions, and staffing strategies from MBT Edge.',
  keywords: [
    'MBT Edge blog',
    '.NET development insights',
    'AI solutions blog',
    'staffing strategies',
    'technology blog',
    'software development',
    'enterprise solutions',
    'technical articles',
    'programming tutorials',
    'software architecture',
    'C# development',
    'ASP.NET Core',
    'machine learning',
    'artificial intelligence',
    'IT staffing',
    'software engineering',
    'cloud solutions',
    'microservices',
    'design patterns',
    'best practices',
    'development tutorials',
    'tech insights',
    'enterprise development',
    'software consulting',
    'IT recruitment',
    'talent acquisition',
    'developer resources',
    'coding standards',
    'application development',
    'system architecture',
    'Template Method Pattern',
    'Decorator Pattern',
    'Strategy Pattern'
  ],
  authors: [{ name: 'MBT Edge' }],
  creator: 'MBT Edge',
  publisher: 'MBT Edge',
  category: 'technology',
  classification: 'Business',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://mbtedge.com/blog',
  },
  openGraph: {
    title: 'Blog | MBT Edge - .NET Development, AI Solutions & Staffing Insights',
    description: 'Explore expert insights, best practices, and technical expertise in .NET development, AI solutions, and staffing strategies from MBT Edge.',
    url: 'https://mbtedge.com/blog',
    siteName: 'MBT Edge',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mbtedge.com/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'MBT Edge Blog - .NET Development & AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | MBT Edge - .NET Development, AI Solutions & Staffing Insights',
    description: 'Explore expert insights, best practices, and technical expertise in .NET development, AI solutions, and staffing strategies from MBT Edge.',
    creator: '@mbtedge',
    site: '@mbtedge',
    images: ['https://mbtedge.com/og-blog.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'article:publisher': 'https://www.facebook.com/mbtedge',
    'article:author': 'MBT Edge',
    'article:section': 'Technology',
    'article:tag': '.NET Development, AI Solutions, Staffing, Software Architecture',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'MBT Edge Blog',
            description: 'Expert insights on .NET development, AI solutions, and staffing strategies',
            url: 'https://mbtedge.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'MBT Edge',
              url: 'https://mbtedge.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://mbtedge.com/blog',
            },
            about: [
              {
                '@type': 'Thing',
                name: '.NET Development',
              },
              {
                '@type': 'Thing',
                name: 'AI Solutions',
              },
              {
                '@type': 'Thing',
                name: 'IT Staffing',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}