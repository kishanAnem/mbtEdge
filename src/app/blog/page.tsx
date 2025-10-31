'use client';

import Link from 'next/link';
import { motion } from '../../components/motion';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'service-pattern',
      title: 'The AbstractService Pattern: A Template for Consistent Service Layer Architecture',
      excerpt: 'Learn how the AbstractService Pattern combines Template Method, Decorator, and Strategy patterns to create robust, maintainable service layer architecture in .NET applications.',
      date: 'October 29, 2025',
      readTime: '10 min read',
      category: '.NET Development',
      tags: ['Architecture', '.NET', 'Design Patterns'],
      href: '/blog/service-pattern'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 lg:py-24">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="text-center">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              MBT Edge Blog
            </motion.h1>
            <motion.p 
              className="text-lg text-logoText-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Insights, best practices, and technical expertise in .NET development, AI solutions, and staffing strategies.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-logoText-secondary">{post.date}</span>
                    <span className="text-sm text-logoText-secondary">•</span>
                    <span className="text-sm text-logoText-secondary">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-4 leading-tight">
                    <Link 
                      href={post.href}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-logoText-secondary text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={post.href}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                    >
                      Read More
                      <svg 
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}