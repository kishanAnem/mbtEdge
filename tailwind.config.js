/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Logo-matched colors
        primary: {
          50: '#f0f7ff', // Very light blue
          100: '#e0efff', // Light blue
          200: '#baddff', // Soft blue
          300: '#7cc0ff', // Medium blue
          400: '#4A90E2', // Main logo blue (exact match)
          500: '#357ABD', // Secondary logo blue
          600: '#2563eb', // Deeper blue
          700: '#1d4ed8', // Dark blue
          800: '#1e40af', // Darker blue
          900: '#1e3a8a', // Darkest blue
        },
        // Logo text colors
        logoText: {
          primary: '#1a1a1a', // MBT EDGE text color
          secondary: '#4a4a4a', // Built for Growth text color
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        business: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        // Logo-matched fonts
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Clean, modern like your logo
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Same for consistency
        logo: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Exact logo font
      },
      fontWeight: {
        'logo-primary': '700', // Bold for MBT EDGE
        'logo-secondary': '400', // Regular for Built for Growth
      }
    },
  },
  plugins: [],
}
