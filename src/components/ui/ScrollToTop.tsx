'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress and toggle visibility
  const updateScrollState = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    setScrollProgress(scrollPercent);
    setIsVisible(scrollTop > 300);
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', updateScrollState);
    return () => {
      window.removeEventListener('scroll', updateScrollState);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          {/* Progress ring */}
          <div className="relative">
            <svg
              className="w-14 h-14 transform -rotate-90"
              viewBox="0 0 56 56"
            >
              {/* Background circle */}
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="4"
                fill="none"
              />
              {/* Progress circle */}
              <motion.circle
                cx="28"
                cy="28"
                r="22"
                stroke="#3B82F6"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={138.23}
                strokeDashoffset={138.23 - (138.23 * scrollProgress) / 100}
                transition={{ duration: 0.1 }}
              />
            </svg>
            
            {/* Button */}
            <motion.button
              onClick={scrollToTop}
              className="absolute inset-0 m-1 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}