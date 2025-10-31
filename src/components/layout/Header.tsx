'use client'

import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  currentPath?: string
}

export default function Header({ currentPath }: HeaderProps) {
  const pathname = currentPath || ''


  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Left: Logo - 60x60 Size */}
          <div className="justify-self-start">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo-s.png"
                alt="MBT Edge Logo"
                width={60}
                height={60}
                className="w-15 h-15"
                priority
              />
              <div className="flex flex-col">
                <span className="text-xl font-logo-primary text-logoText-primary tracking-tight">
                  MBT EDGE
                </span>
                <span className="text-xs font-logo-secondary text-logoText-secondary -mt-1">
                  Built for Growth
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex space-x-8 justify-center">
            <Link href="/" className="text-logoText-primary hover:text-primary-400 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-logoText-primary hover:text-primary-400 font-medium transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-logoText-primary hover:text-primary-400 font-medium transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-logoText-primary hover:text-primary-400 font-medium transition-colors">
              Blog
            </Link>
            {/* Career link hidden as requested
            <Link href="/career" className="text-logoText-primary hover:text-primary-400 font-medium transition-colors">
              Careers
            </Link>
            */}
            <Link href="/contact" className="text-logoText-primary hover:text-primary-400 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right: Mobile Menu Button and CTA Button */}
          <div className="justify-self-end flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-logoText-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* CTA Button - Logo Blue - Hidden on contact page */}
            {!pathname.startsWith('/contact') && (
              <Link 
                href="/contact" 
                className="hidden md:inline-flex bg-primary-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-500 transition-colors"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
