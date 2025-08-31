'use client';

import Link from 'next/link'
import Image from 'next/image'
import { motion } from '../components/motion'
import RetailProPOSImage from '../assets/RetailProPOS.png'

// Animation variants - using simpler TypeScript-compatible variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Logo Color Matched with Apple-like Animation */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-12 sm:py-16 lg:py-32 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              className="lg:col-span-6 text-center lg:text-left"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-logo-primary text-logoText-primary leading-tight mb-4 sm:mb-6"
                variants={slideUp}
              >
                Empowering Your Business with 
                <motion.span 
                  className="text-primary-400 block sm:inline"
                  variants={slideUp}
                > Tailored Digital Talent Solutions</motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-logoText-secondary mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                variants={slideUp}
              >
                At MBT Edge, we bridge the gap between innovative technology and exceptional talent, driving your business forward with our comprehensive staffing and digital solutions.
              </motion.p>
              
              {/* CTA Buttons - Logo Blue */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
                variants={slideUp}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="block bg-primary-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors text-center text-sm sm:text-base">
                    Get Started Free
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/products" className="block border-2 border-primary-400 text-primary-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center text-sm sm:text-base">
                    View Our Products
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-logoText-secondary"
                variants={staggerContainer}
              >
                <motion.span 
                  className="flex items-center"
                  variants={slideUp}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  No Setup Fees
                </motion.span>
                <motion.span 
                  className="flex items-center"
                  variants={slideUp}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  24/7 Support
                </motion.span>
                <motion.span 
                  className="flex items-center"
                  variants={slideUp}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  30-Day Free Trial
                </motion.span>
              </motion.div>
            </motion.div>
            
            {/* Dashboard Mockup */}
            <motion.div 
              className="lg:col-span-6 mt-8 sm:mt-12 lg:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 1,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <motion.div 
                  className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm text-logoText-secondary">MBT Edge Dashboard</span>
                  </div>
                  <motion.div 
                    className="space-y-3 sm:space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="flex items-center justify-between p-3 sm:p-4 bg-primary-50 rounded-lg"
                      variants={slideUp}
                    >
                      <span className="font-medium text-sm sm:text-base text-logoText-primary">Active Staff</span>
                      <span className="text-lg sm:text-2xl font-bold text-primary-400">1,247</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-between p-3 sm:p-4 bg-accent-50 rounded-lg"
                      variants={slideUp}
                    >
                      <span className="font-medium text-sm sm:text-base text-logoText-primary">Revenue Today</span>
                      <span className="text-lg sm:text-2xl font-bold text-accent-600">$24,680</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-between p-3 sm:p-4 bg-business-50 rounded-lg"
                      variants={slideUp}
                    >
                      <span className="font-medium text-sm sm:text-base text-logoText-primary">Inventory Items</span>
                      <span className="text-lg sm:text-2xl font-bold text-business-600">8,934</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mobile-Optimized Trusted By Section 
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Trusted by 10,000+ businesses worldwide</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center opacity-60">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="bg-gray-200 h-8 sm:h-10 lg:h-12 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-medium text-xs sm:text-sm">Co {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Mobile-Enhanced Services Section with Apple-like animations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Premium Staffing Services
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Cutting-edge talent solutions that help businesses streamline operations, reduce costs, and scale smarter with MBT Edge.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Direct Placement */}
            <motion.div 
              className="group p-6 sm:p-8 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary-200 transition-colors"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                viewport={{ once: true }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Direct Placement
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                We help you build a high-performing workforce by connecting you with top talent that aligns with your company culture and technical needs.
              </motion.p>
              <motion.ul 
                className="space-y-2 mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <li className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Culture-fit Assessment
                </li>
                <li className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Technical Skills Validation
                </li>
                <li className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Long-term Success Planning
                </li>
              </motion.ul>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/services/direct-placement" className="text-primary-600 font-medium hover:text-primary-700 text-sm sm:text-base">
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>

            {/* IT & NON IT Staffing */}
            <motion.div 
              className="group p-6 sm:p-8 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent-200 transition-colors"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                viewport={{ once: true }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                IT & NON IT Staffing
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                We deliver top-tier talent across industries, ensuring businesses acquire skilled professionals for both short-term projects and long-term roles.
              </motion.p>
              <motion.ul 
                className="space-y-2 mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <li className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Technology Specialists
                </li>
                <li className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Healthcare Professionals
                </li>
                <li className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Finance Experts
                </li>
              </motion.ul>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/services/it-staffing" className="text-accent-600 font-medium hover:text-accent-700 text-sm sm:text-base">
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>

            {/* RPO Services */}
            <motion.div 
              className="group p-6 sm:p-8 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-business-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-business-200 transition-colors"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
                viewport={{ once: true }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-business-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                RPO Services
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our RPO services streamline your recruitment process, improving efficiency and reducing hiring costs while ensuring access to top talent.
              </motion.p>
              <motion.ul 
                className="space-y-2 mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <li className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  End-to-end Recruitment
                </li>
                <li className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Cost Reduction
                </li>
                <li className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Employer Brand Enhancement
                </li>
              </motion.ul>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/services/rpo" className="text-business-600 font-medium hover:text-business-700 text-sm sm:text-base">
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Retail Pro Product Section with Apple-like Animations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              className="lg:col-span-5 order-2 lg:order-1 mt-10 lg:mt-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-xl"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src={RetailProPOSImage} 
                  alt="MBT Retail Pro" 
                  width={500} 
                  height={350} 
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                MBT Retail Pro
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                A unified retail platform that covers your entire value chain. Designed with an open architecture approach, our solution enables retailers to adapt quickly to customer needs and evolving market dynamics.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Flexible Inventory</h3>
                  <p className="text-sm text-gray-600">Real-time inventory management and unified product data</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Scalable POS</h3>
                  <p className="text-sm text-gray-600">Mobile and fixed checkout options with customizable flows</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Supply Chain Control</h3>
                  <p className="text-sm text-gray-600">Optimized order processing and warehouse management</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
                  <p className="text-sm text-gray-600">Holistic view of customers, inventory, and pricing</p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/products/retail-pro" className="inline-block bg-primary-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors text-center text-sm sm:text-base">
                    Learn More
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="inline-block border-2 border-primary-400 text-primary-400 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center text-sm sm:text-base">
                    Request a Demo
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Empowering Business Section with Apple-like Animations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Empowering Business with Expert Staffing Solutions
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Cutting-Edge RPO, KPO and Staffing Solutions. Streamline operations, reduce costs, and scale smarter with MBT Edge.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                icon: "👥",
                title: "Right Talent",
                description: "Customized staffing for IT & Non-IT roles"
              },
              {
                icon: "💼",
                title: "Scalable Hiring", 
                description: "Flexible solutions for dynamic workforce needs"
              },
              {
                icon: "✓",
                title: "Quality Assured",
                description: "Vetted professionals, seamless onboarding"
              },
              {
                icon: "🔄",
                title: "Transformative",
                description: "The perfect blend of people, innovation, and branding"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 sm:p-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -10, 
                  transition: { type: "spring", stiffness: 300 } 
                }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.3 + index * 0.1
                  }}
                  viewport={{ once: true }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  className="text-sm sm:text-lg font-semibold text-gray-900 mb-2"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-xs sm:text-base text-gray-600"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Revolutionise Your Company Section with Apple-like Animations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-600 overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            Revolutionise Your Company?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-primary-100 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              stiffness: 50
            }}
            viewport={{ once: true }}
          >
            Get expert insights tailored to your needs. Our team helps you strategize, optimize, and scale efficiently.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.4
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/contact" className="block bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                Get Started
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/contact" className="block border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm sm:text-base">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Get in Touch Section with Apple-like Animations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Get in Touch With Our Sales Experts
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let us help you find the perfect candidate for your permanent positions.
          </motion.p>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/contact" className="inline-block bg-primary-400 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors text-base sm:text-lg">
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}