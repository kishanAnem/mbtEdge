'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from '../../../components/motion';

export default function ShopifyPermissionsBlog() {
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
              System Architecture
            </motion.span>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              🧩 Designing Staff Permissions for Shopify-like Stores: Redis, Postgres, or MongoDB?
            </motion.h1>
            
            <motion.p 
              className="text-lg text-logoText-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Published on November 13, 2025
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center space-x-4 text-sm text-logoText-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>📖 15 min read</span>
              <span>•</span>
              <span>🏗️ Architecture</span>
              <span>•</span>
              <span>⚡ Database</span>
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
            <p className="text-logoText-secondary leading-relaxed text-lg mb-6">
              Modern SaaS platforms like <strong>Shopify</strong> allow multiple staff members to manage stores with fine-grained access controls.  
              Admins, managers, support teams — each role needs the right balance between <strong>access, security, and performance</strong>.
            </p>
            
            <p className="text-logoText-secondary leading-relaxed mb-6">
              When designing such a system, two questions immediately appear:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-6">
              <ol className="text-blue-800 space-y-2">
                <li>1. How do we <strong>authenticate</strong> staff (who are they)?</li>
                <li>2. How do we <strong>authorize</strong> them (what can they do)?</li>
              </ol>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-xl mb-6">
              <p className="text-amber-900 font-medium">
                And the big architectural question behind all of this:<br />
                <span className="text-lg font-semibold">Where do we store and fetch those permissions — Redis, SQL, or MongoDB?</span>
              </p>
            </div>
            
            <p className="text-logoText-secondary leading-relaxed">
              In this post, we'll explore how Shopify-like platforms structure staff permissions, compare three backend options — 
              <strong>Redis-only</strong>, <strong>Postgres/MySQL + Redis</strong>, and <strong>MongoDB + Redis</strong> — 
              and finish with a practical recommendation based on cost, performance, and durability.
            </p>
          </section>

          {/* How Staff Authentication Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">⚙️ How Staff Authentication & Authorization Work (Shopify Style)</h2>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <div className="text-blue-800 font-semibold">Staff Sign-In</div>
                  <div className="text-blue-600 text-sm">Email, SSO, OAuth</div>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <div className="text-purple-800 font-semibold">Access Token/JWT</div>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mt-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="text-green-800 font-semibold">Permission Lookup</div>
                  <div className="text-green-600 text-sm">Role + Store Scope</div>
                </div>
                <div className="bg-emerald-100 p-4 rounded-lg">
                  <div className="text-emerald-800 font-semibold">Business Action</div>
                  <div className="text-emerald-600 text-sm">Read/Write Products, Orders, etc.</div>
                </div>
              </div>
            </div>
            
            <ul className="text-logoText-secondary space-y-2">
              <li>• <strong>Authentication (AuthN)</strong> confirms identity — typically via password, OAuth, or SSO.</li>
              <li>• <strong>Authorization (AuthZ)</strong> defines access — via roles and permissions.</li>
              <li>• <strong>Audit trail</strong> tracks every permission or role change.</li>
            </ul>
            
            <p className="text-logoText-secondary leading-relaxed mt-4">
              Shopify applies <strong>Role-Based Access Control (RBAC)</strong> layered with <strong>Store Scope</strong>.  
              Each staff user belongs to one or more roles that define permissions (e.g., <code className="bg-gray-100 px-2 py-1 rounded">read_orders</code>, <code className="bg-gray-100 px-2 py-1 rounded">write_products</code>).
            </p>
          </section>

          {/* Design Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">🧱 Design Requirements</h2>
            
            <p className="text-logoText-secondary leading-relaxed mb-4">
              When building this for your own SaaS or retail platform, these are your non-negotiables:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span className="text-logoText-secondary"><strong>Read-heavy:</strong> permission checks happen on every request</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span className="text-logoText-secondary"><strong>Write-light:</strong> roles change rarely</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span className="text-logoText-secondary"><strong>Strong consistency:</strong> permission updates must reflect immediately</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span className="text-logoText-secondary"><strong>Low latency:</strong> can't wait 50ms to check permissions on every API call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span className="text-logoText-secondary"><strong>Durable:</strong> data must survive restarts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span className="text-logoText-secondary"><strong>Auditable:</strong> track who changed what and when</span>
                </div>
              </div>
            </div>
          </section>

          {/* Option 1: Redis-Only */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">🚀 Option 1: Redis-Only</h2>
            
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 mb-6">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-red-200 px-4 py-2 rounded-lg inline-block mb-4">
                    <span className="text-red-800 font-semibold">API Server</span>
                  </div>
                  <div className="flex justify-center">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                  <div className="bg-red-300 px-6 py-3 rounded-lg mt-4">
                    <span className="text-red-900 font-semibold">Redis Store</span>
                    <div className="text-red-700 text-sm mt-1">store:{"{storeId}"}:user:{"{userId}"}:perms</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-900 mb-3">✅ Pros</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Ultra-fast reads (sub-millisecond)</li>
                  <li>• Simple — no joins or ORM needed</li>
                  <li>• Great for prototypes or edge-cache style setups</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-900 mb-3">❌ Cons</h3>
                <ul className="text-red-800 space-y-2">
                  <li>• Durability risk (Redis is memory-first)</li>
                  <li>• No query power — can't easily list "all staff with X permission"</li>
                  <li>• Higher memory costs at scale</li>
                  <li>• Recovery complexity if data lost</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Option 2: Postgres + Redis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">🧩 Option 2: Postgres/MySQL + Redis (Recommended)</h2>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-200 p-4 rounded-lg">
                  <div className="text-blue-800 font-semibold">API Server</div>
                </div>
                <div className="bg-purple-200 p-4 rounded-lg">
                  <div className="text-purple-800 font-semibold">Redis Cache</div>
                </div>
                <div className="bg-green-200 p-4 rounded-lg">
                  <div className="text-green-800 font-semibold">Postgres/MySQL</div>
                  <div className="text-green-600 text-sm">Durable Storage</div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <div className="text-gray-600 text-sm">Cache Miss → Database → Cache → API</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-900 mb-3">✅ Pros</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Full <strong>durability + ACID</strong> transactions</li>
                  <li>• Easy to audit and query</li>
                  <li>• Low-latency reads (cached)</li>
                  <li>• Cost-efficient (Redis only holds hot data)</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">❌ Cons</h3>
                <ul className="text-amber-800 space-y-2">
                  <li>• Cache invalidation logic required</li>
                  <li>• Slightly more complex architecture</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Option 3: MongoDB + Redis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">🌿 Option 3: MongoDB + Redis</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-900 mb-3">✅ Pros</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Flexible schema — evolve quickly</li>
                  <li>• Ideal for denormalized permission models</li>
                  <li>• Easier to embed custom scopes per store</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-900 mb-3">❌ Cons</h3>
                <ul className="text-red-800 space-y-2">
                  <li>• Harder to run relational queries</li>
                  <li>• Multi-document transactions slower</li>
                  <li>• More ops complexity (clusters, sharding)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Schema Example */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">💾 Schema Example (Postgres + Redis)</h2>
            
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
{`CREATE TABLE roles (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE permissions (
  id TEXT PRIMARY KEY
);

CREATE TABLE role_permissions (
  role_id UUID REFERENCES roles(id),
  permission_id TEXT REFERENCES permissions(id),
  PRIMARY KEY(role_id, permission_id)
);

CREATE TABLE store_role_assignments (
  store_id UUID,
  user_id UUID,
  role_id UUID REFERENCES roles(id),
  scope JSONB,
  PRIMARY KEY(store_id, user_id)
);`}
              </pre>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-logoText-primary mb-3">Redis Key Pattern</h4>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">store:{"{storeId}"}:user:{"{userId}"}:perms</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-logoText-primary mb-3">JSON Value Example</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm">
{`{
  "permissions": ["read_orders", "write_customers"],
  "version": 3,
  "expires_in": 300
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Cost & Performance Snapshot */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">💰 Cost & Performance Snapshot</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">Option</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">Durability</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">Read Speed</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">Query Power</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">Cost</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-900">Recommended For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-logoText-primary">Redis-only</td>
                    <td className="px-6 py-4 text-logoText-secondary">Low</td>
                    <td className="px-6 py-4 text-logoText-secondary">⚡⚡⚡</td>
                    <td className="px-6 py-4 text-logoText-secondary">🔸 Minimal</td>
                    <td className="px-6 py-4 text-logoText-secondary">💸 High (RAM)</td>
                    <td className="px-6 py-4 text-logoText-secondary">Prototypes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-logoText-primary">Postgres/MySQL + Redis</td>
                    <td className="px-6 py-4 text-logoText-secondary">High</td>
                    <td className="px-6 py-4 text-logoText-secondary">⚡⚡</td>
                    <td className="px-6 py-4 text-logoText-secondary">✅ Strong</td>
                    <td className="px-6 py-4 text-logoText-secondary">💰 Balanced</td>
                    <td className="px-6 py-4 text-logoText-secondary">Production</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-logoText-primary">MongoDB + Redis</td>
                    <td className="px-6 py-4 text-logoText-secondary">High</td>
                    <td className="px-6 py-4 text-logoText-secondary">⚡⚡</td>
                    <td className="px-6 py-4 text-logoText-secondary">⚙️ Medium</td>
                    <td className="px-6 py-4 text-logoText-secondary">💰+</td>
                    <td className="px-6 py-4 text-logoText-secondary">Flexible schemas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Security Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">🔒 Security Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-logoText-secondary">Enforce checks server-side only</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-logoText-secondary">Encrypt data in transit and at rest</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-logoText-secondary">Rotate access tokens frequently</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-logoText-secondary">Log every permission change</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-logoText-secondary">Monitor Redis hit ratio & latency</span>
                </div>
              </div>
            </div>
          </section>

          {/* Final Recommendation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">🧭 Final Recommendation</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-8 rounded-xl mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-900 mb-4">
                  ✅ <strong>Postgres + Redis</strong> = Durability + Performance + Cost Efficiency
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-emerald-800">
                    <strong>Caching</strong> is your <strong>speed layer</strong>
                  </div>
                  <div className="text-emerald-800">
                    <strong>SQL</strong> is your <strong>truth layer</strong>
                  </div>
                  <div className="text-emerald-800">
                    <strong>Durability</strong> is your <strong>safety net</strong>
                  </div>
                </div>
                <p className="text-emerald-800 mt-6 font-medium">
                  Together, they form a <strong>scalable, Shopify-grade permission backbone</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* MBTEdge Takeaway */}
          <section className="bg-primary-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">🧱 MBTEdge Takeaway</h2>
            <p className="text-primary-800 text-lg">
              Designing staff authorization isn't about the fastest tech — it's about balancing 
              <strong> correctness, consistency, and cost</strong>.
            </p>
            
            <div className="mt-6 text-sm text-primary-700">
              <p><strong>Author:</strong> MBTEdge Engineering Team</p>
              <p><strong>Tags:</strong> #Shopify #Redis #Postgres #MongoDB #Architecture #MBTEdge #SaaS #AuthZ #RBAC</p>
            </div>
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
            Need Expert System Architecture?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Our team specializes in designing scalable SaaS architectures, database optimization, and permission systems. 
            Let us help you build robust, secure applications.
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
              Get Architecture Consultation
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