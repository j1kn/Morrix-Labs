import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#E5E7EB',
          100: '#D1D5DB',
          200: '#9CA3AF',
          300: '#6B7280',
          400: '#374151',
          500: '#1F2937',
          600: '#161A22',
          700: '#12151C',
          800: '#0D0F14',
          900: '#0A0C10',
        },
        accent: '#6366F1',
      },
      backgroundColor: {
        primary: '#0D0F14',
        secondary: '#12151C',
        card: '#161A22',
      },
      textColor: {
        primary: '#E5E7EB',
        secondary: '#9CA3AF',
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.06)',
      },
      spacing: {
        section: '80px',
      },
    },
  },
  plugins: [],
}
export default config
