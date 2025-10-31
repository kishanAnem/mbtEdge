import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The AbstractService Pattern: A Template for Consistent Service Layer Architecture | MBT Edge',
  description: 'Learn how the AbstractService Pattern combines Template Method, Decorator, and Strategy patterns to create robust, maintainable service layer architecture in .NET applications.',
  keywords: [
    '.NET development',
    'AbstractService pattern',
    'service layer architecture',
    'design patterns',
    'Template Method pattern',
    'Decorator pattern',
    'Strategy pattern',
    'enterprise applications',
    'microservices',
    'logging',
    'error handling',
    'observability',
    'software architecture',
    'C# programming',
    'ASP.NET Core',
    'enterprise development',
    'clean architecture',
    'SOLID principles',
    'dependency injection',
    'cross-cutting concerns',
    'structured logging',
    'exception handling',
    'performance monitoring',
    'application insights',
    'distributed tracing',
    'cloud watch',
    'datadog integration',
    'elk stack',
    'splunk',
    'code maintainability',
    'separation of concerns',
    'unit testing',
    'testability',
    'software engineering',
    'best practices',
    'GoF patterns',
    'enterprise patterns',
    'service design',
    'application architecture',
    'software quality'
  ],
  authors: [{ name: 'MBT Edge' }],
  creator: 'MBT Edge',
  publisher: 'MBT Edge',
  category: 'technology',
  classification: 'Technical Article',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://mbtedge.com/blog/service-pattern',
  },
  openGraph: {
    title: 'The AbstractService Pattern: A Template for Consistent Service Layer Architecture',
    description: 'Learn how the AbstractService Pattern combines Template Method, Decorator, and Strategy patterns to create robust, maintainable service layer architecture in .NET applications.',
    url: 'https://mbtedge.com/blog/service-pattern',
    siteName: 'MBT Edge',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-29T00:00:00.000Z',
    modifiedTime: '2025-10-31T00:00:00.000Z',
    authors: ['MBT Edge'],
    section: 'Technology',
    tags: ['.NET', 'Design Patterns', 'Software Architecture', 'Enterprise Development'],
    images: [
      {
        url: 'https://mbtedge.com/og-service-pattern.jpg',
        width: 1200,
        height: 630,
        alt: 'AbstractService Pattern in .NET Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The AbstractService Pattern: A Template for Consistent Service Layer Architecture',
    description: 'Learn how the AbstractService Pattern combines Template Method, Decorator, and Strategy patterns to create robust, maintainable service layer architecture in .NET applications.',
    creator: '@mbtedge',
    site: '@mbtedge',
    images: ['https://mbtedge.com/og-service-pattern.jpg'],
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
    'article:tag': '.NET Development, Design Patterns, Software Architecture, Enterprise Development',
    'article:published_time': '2025-10-29T00:00:00.000Z',
    'article:modified_time': '2025-10-31T00:00:00.000Z',
  },
};

export default function ServicePatternLayout({
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
            '@type': 'TechArticle',
            headline: 'The AbstractService Pattern: A Template for Consistent Service Layer Architecture',
            description: 'Learn how the AbstractService Pattern combines Template Method, Decorator, and Strategy patterns to create robust, maintainable service layer architecture in .NET applications.',
            image: 'https://mbtedge.com/og-service-pattern.jpg',
            datePublished: '2025-10-29T00:00:00.000Z',
            dateModified: '2025-10-31T00:00:00.000Z',
            author: {
              '@type': 'Organization',
              name: 'MBT Edge',
              url: 'https://mbtedge.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'MBT Edge',
              url: 'https://mbtedge.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://mbtedge.com/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://mbtedge.com/blog/service-pattern',
            },
            about: [
              {
                '@type': 'Thing',
                name: '.NET Development',
              },
              {
                '@type': 'Thing',
                name: 'Software Architecture',
              },
              {
                '@type': 'Thing',
                name: 'Design Patterns',
              },
            ],
            keywords: '.NET development, AbstractService pattern, design patterns, software architecture, enterprise applications',
            programmingLanguage: 'C#',
            operatingSystem: 'Cross-platform',
            applicationCategory: 'DeveloperApplication',
          }),
        }}
      />
      {children}
    </>
  );
}