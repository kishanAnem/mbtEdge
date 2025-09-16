'use client';

import { useState } from 'react';
import { motion } from '../../components/motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // ...form handlers (if any) go here...

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 lg:py-24">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            const [formData, setFormData] = useState({
              name: '',
              email: '',
              phone: '',
              company: '',
              subject: '',
              message: '',
            });

            const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              const { name, value } = e.target;
              setFormData((prev) => ({ ...prev, [name]: value }));
            };

            const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              // Submission logic here
              alert('Form submitted!');
            };

            return (
              <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 lg:py-24">
                  <motion.div 
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.h1 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Contact Us
                    </motion.h1>
                    <motion.p 
                      className="text-lg md:text-xl text-primary-700 mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Ready to take the next step? Reach out to our team for a personalized consultation or to learn more about our <Link href="/services" className="underline text-primary-400">services</Link> and <Link href="/about" className="underline text-primary-400">company</Link>.
                    </motion.p>
                  </motion.div>
                </section>
                {/* Trust Section: Testimonials & Logos */}
                <section className="py-12 bg-white">
                  <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6 text-primary-900">Trusted by Industry Leaders</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-primary-50 p-6 rounded-lg shadow">
                        <p className="text-lg italic mb-2">“MBTEdge is responsive, professional, and delivers results. Highly recommended!”</p>
                        <span className="block font-semibold text-primary-700">— HR Manager, Retail Chain</span>
                      </div>
                      <div className="bg-primary-50 p-6 rounded-lg shadow">
                        <p className="text-lg italic mb-2">“Their team made our hiring process effortless and effective.”</p>
                        <span className="block font-semibold text-primary-700">— COO, Tech Firm</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8 opacity-70">
                      <Image src="/assets/logos/logo.png" alt="Client logo 1" width={80} height={40} />
                      <Image src="/assets/logos/logo1.png" alt="Client logo 2" width={80} height={40} />
                    </div>
                  </div>
                </section>
                {/* FAQ Section for SEO */}
                <section className="py-12 bg-primary-50">
                  <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6 text-primary-900">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-primary-700">How quickly will I get a response?</h3>
                        <p className="text-logoText-secondary">We respond to all inquiries within one business day.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-700">Can I request a free consultation?</h3>
                        <p className="text-logoText-secondary">Absolutely! Just fill out the form and our team will reach out to schedule a call.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-700">What information should I provide?</h3>
                        <p className="text-logoText-secondary">Please include your name, company, and a brief description of your needs so we can best assist you.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
                  >
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
                  >
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name<span className="text-primary-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email<span className="text-primary-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject<span className="text-primary-600">*</span>
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  >
                    <option value="" disabled>Choose a subject</option>
                    <option value="Direct Placement">Direct Placement</option>
                    <option value="IT Staffing">IT Staffing</option>
                    <option value="RPO Services">RPO Services</option>
                    <option value="Retail Pro">Retail Pro</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message<span className="text-primary-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 rounded-lg font-medium text-white transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : submitSuccess 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-primary-600 hover:bg-primary-700'
                  }`}
                  whileHover={{ scale: isSubmitting || submitSuccess ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || submitSuccess ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : submitSuccess ? 'Message Sent!' : 'Send Message'}
                </motion.button>
                
                {submitSuccess && (
                  <motion.div 
                    className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex">
                      <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold">Thank you for contacting us!</h4>
                        <p className="text-sm">We've received your message and will get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section - Full Width Modern Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our offices around the country
            </p>
          </motion.div>
          
          <motion.div 
            className="overflow-hidden rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="h-[500px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30593431685!2d-74.25986775678654!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1661787326388!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section - Clean Modern Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Support</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to the questions we often receive from our clients
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: "What industries do you serve?",
                answer: "We provide staffing and digital solutions across multiple industries, including technology, healthcare, finance, retail, manufacturing, and more. Our expertise spans both technical and non-technical domains."
              },
              {
                question: "How quickly can you provide candidates for an open position?",
                answer: "Our response time varies based on position complexity and market conditions. For standard roles, we typically provide qualified candidates within 48-72 hours. For specialized positions, it may take 5-7 business days to ensure we match you with the right talent."
              },
              {
                question: "What makes MBT Edge different from other staffing companies?",
                answer: "We combine deep industry expertise with innovative technology to deliver more precise matches between candidates and employers. Our holistic approach considers not just skills, but cultural fit and long-term success potential, leading to higher retention rates and better outcomes."
              },
              {
                question: "Do you offer international staffing services?",
                answer: "Yes, we provide international staffing services and have experience in navigating the complexities of global recruitment. We help businesses access talent worldwide while ensuring compliance with local employment regulations and practices."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    <span className="relative ml-4 flex-shrink-0">
                      <svg className="h-5 w-5 text-gray-500 group-open:hidden" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      <svg className="h-5 w-5 text-gray-500 hidden group-open:block" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section - Bold Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10">
              <div className="md:flex items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
                  <p className="text-lg text-gray-600">
                    Let's discuss how our staffing and technology solutions can help you achieve your goals.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <motion.button
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
            
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-primary-100 opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-40 h-40 rounded-full bg-primary-100 opacity-20"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
