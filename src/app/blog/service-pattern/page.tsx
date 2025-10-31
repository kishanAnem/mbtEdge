'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from '../../../components/motion';

export default function ServicePatternBlog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 lg:py-24">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="text-center mb-8">
            <motion.span 
              className="inline-block bg-primary-200 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              .NET Development Blog
            </motion.span>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              The AbstractService Pattern: A Template for Consistent Service Layer Architecture
            </motion.h1>
            
            <motion.p 
              className="text-lg text-logoText-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Published on October 29, 2025
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center space-x-4 text-sm text-logoText-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>📖 10 min read</span>
              <span>•</span>
              <span>🏗️ Architecture</span>
              <span>•</span>
              <span>⚡ .NET</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Introduction</h2>
            <p className="text-logoText-secondary leading-relaxed">
              In enterprise applications, maintaining consistency across service layers while ensuring proper logging, 
              error handling, and observability can be challenging. The <strong>AbstractService Pattern</strong> provides 
              an elegant solution by combining multiple design patterns to create a robust foundation for service implementations.
            </p>
          </section>

          {/* Design Patterns Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Design Patterns in Action</h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">1. Template Method Pattern</h3>
                <p className="text-blue-800 mb-3">The <code className="bg-blue-200 px-2 py-1 rounded">ExecuteWithLoggingAsync</code> method defines a template algorithm:</p>
                <ul className="text-blue-800 space-y-1 ml-4">
                  <li>• Begin logging scope</li>
                  <li>• Log execution start</li>
                  <li>• Execute business logic</li>
                  <li>• Log execution completion</li>
                  <li>• Handle exceptions consistently</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-900 mb-3">2. Decorator Pattern</h3>
                <p className="text-green-800 mb-3">The method decorates any business function with:</p>
                <ul className="text-green-800 space-y-1 ml-4">
                  <li>• Structured logging</li>
                  <li>• Exception handling</li>
                  <li>• Request correlation</li>
                  <li>• Performance tracking hooks</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">3. Strategy Pattern</h3>
                <p className="text-purple-800">
                  The <code className="bg-purple-200 px-2 py-1 rounded">Func&lt;Task&lt;TResponse&gt;&gt;</code> parameter allows each service to inject 
                  its specific business logic while maintaining the common execution pattern.
                </p>
              </div>
            </div>
          </section>

          {/* Key Advantages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Key Advantages</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🎯</span>
                  <h3 className="text-xl font-semibold text-primary-900">Consistency Across Services</h3>
                </div>
                <p className="text-logoText-secondary mb-3">Every service that inherits from AbstractService automatically gets:</p>
                <ul className="text-logoText-secondary space-y-1 ml-4">
                  <li>• Standardized logging format</li>
                  <li>• Consistent error handling</li>
                  <li>• Request correlation via scoped logging</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏗️</span>
                  <h3 className="text-xl font-semibold text-primary-900">Separation of Concerns</h3>
                </div>
                <ul className="text-logoText-secondary space-y-2">
                  <li><strong>Business Logic:</strong> Remains pure and focused</li>
                  <li><strong>Cross-Cutting Concerns:</strong> Handled by the abstract base class</li>
                  <li><strong>Infrastructure:</strong> Logging, error handling, monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Real-World Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Real-World Benefits</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔍</span>
                  <h3 className="text-xl font-semibold text-amber-900">Enhanced Observability</h3>
                </div>
                <p className="text-amber-800">
                  Structured logging with scopes enables powerful <strong>Error Correlation</strong> in centralized 
                  logging systems like ELK or Application Insights.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">⚡</span>
                  <h3 className="text-xl font-semibold text-indigo-900">Performance Monitoring</h3>
                </div>
                <p className="text-indigo-800 mb-3">
                  The pattern makes it trivial to add performance metrics and distributed tracing. 
                  It can <strong>track operation duration automatically</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <ul className="text-indigo-800 space-y-1">
                    <li>• Identify slow operations</li>
                    <li>• Set up performance alerts</li>
                  </ul>
                  <ul className="text-indigo-800 space-y-1">
                    <li>• Track performance trends</li>
                    <li>• Optimize based on production data</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🧪</span>
                  <h3 className="text-xl font-semibold text-emerald-900">Improved Testability</h3>
                </div>
                <p className="text-emerald-800">
                  The pattern enables clean unit testing by separating business logic from cross-cutting concerns.
                </p>
              </div>
            </div>
          </section>

          {/* Observability Integration Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Observability Integration</h2>
            <p className="text-logoText-secondary mb-6">The pattern works seamlessly with modern observability platforms:</p>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">Platform</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">Integration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-logoText-primary">Application Insights (Azure)</td>
                    <td className="px-6 py-4 text-logoText-secondary">Automatic request tracking with custom dimensions</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-logoText-primary">AWS CloudWatch</td>
                    <td className="px-6 py-4 text-logoText-secondary">Structured JSON logs with queryable fields</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-logoText-primary">DataDog</td>
                    <td className="px-6 py-4 text-logoText-secondary">Distributed tracing with automatic span creation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-logoText-primary">Splunk</td>
                    <td className="px-6 py-4 text-logoText-secondary">Indexed JSON fields for fast searches</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-logoText-primary">Elastic Stack (ELK)</td>
                    <td className="px-6 py-4 text-logoText-secondary">Automatic field mapping for Kibana dashboards</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* When to Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">When to Use This Pattern</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                  <span className="mr-2">✅</span> Perfect for:
                </h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Microservices with multiple service classes</li>
                  <li>• Applications requiring consistent logging</li>
                  <li>• Systems with strict error handling requirements</li>
                  <li>• Enterprise applications with audit trails</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <span className="mr-2">❌</span> Avoid when:
                </h3>
                <ul className="text-red-800 space-y-2">
                  <li>• Simple applications with few services</li>
                  <li>• Performance-critical paths where overhead matters</li>
                  <li>• Services with vastly different execution patterns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Conclusion</h2>
            <p className="text-logoText-secondary leading-relaxed mb-6">
              The AbstractService pattern demonstrates how combining multiple design patterns can create a powerful, 
              maintainable architecture. By leveraging Template Method, Decorator, and Strategy patterns, we achieve:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                <span className="text-logoText-secondary"><strong>Consistency</strong> across all services</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                <span className="text-logoText-secondary"><strong>Maintainability</strong> through centralized cross-cutting concerns</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                <span className="text-logoText-secondary"><strong>Testability</strong> via clean separation of concerns</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                <span className="text-logoText-secondary"><strong>Observability</strong> through structured logging and scoping</span>
              </div>
            </div>
            
            <p className="text-logoText-secondary leading-relaxed">
              This pattern has proven invaluable in enterprise microservices, where consistency and observability are 
              paramount to successful operations and maintenance. The AbstractService pattern demonstrates a generic 
              approach applicable to any enterprise application and has been successfully implemented in various domains 
              including e-commerce, financial services, healthcare, and logistics systems.
            </p>
          </section>

          {/* Further Reading */}
          <section className="bg-primary-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Further Reading</h2>
            <ul className="text-primary-800 space-y-2">
              <li>• <a href="https://learn.microsoft.com/en-us/shows/visual-studio-toolbox/design-patterns-template-method" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Template Method Pattern - GoF Design Patterns</a></li>
            </ul>
          </section>
        </motion.div>
      </article>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary-600 to-purple-600 py-16">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Need Expert .NET Development?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Our team specializes in enterprise .NET architectures, design patterns, and best practices. 
            Let us help you build scalable, maintainable applications.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}