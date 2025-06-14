import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // Apple UI Colors
        'apple-bg': '#F9F9F9',
        'apple-bg-alt': '#FFFFFF',
        'apple-text': '#1C1C1E',
        'apple-text-secondary': 'rgba(60, 60, 67, 0.6)',
        'apple-accent': '#007AFF',
        'apple-accent-hover': '#005FCC',
        'apple-border': '#D1D1D6',
        'apple-shadow': 'rgba(0, 0, 0, 0.04)',
        'apple-shadow-card': 'rgba(0, 0, 0, 0.05)',
        
        // Dark mode
        'apple-bg-dark': '#000000',
        'apple-bg-alt-dark': '#1C1C1E',
        'apple-text-dark': '#FFFFFF',
        'apple-text-secondary-dark': 'rgba(235, 235, 245, 0.6)',
        'apple-border-dark': 'rgba(84, 84, 88, 0.6)',
        'apple-shadow-dark': 'rgba(0, 0, 0, 0.3)',
        
        // Lyzr brand colors
        'lyzr-primary': '#6366f1',
        'lyzr-secondary': '#8b5cf6',
        'lyzr-accent': '#06b6d4',
        
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        // 8px spacing system
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      maxWidth: {
        'content': '1200px',
      },
      fontSize: {
        // Apple Typography Scale
        'headline': ['clamp(28px, 4vw, 34px)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'subtitle': ['clamp(20px, 3vw, 24px)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body': ['clamp(16px, 2vw, 18px)', { lineHeight: '1.5', letterSpacing: '-0.005em', fontWeight: '400' }],
        'caption': ['clamp(12px, 1.5vw, 14px)', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '400' }],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float-gentle': 'float-gentle 3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'apple': '0px 4px 12px rgba(0, 0, 0, 0.05)',
        'apple-lg': '0px 8px 24px rgba(0, 0, 0, 0.05)',
      },
      transitionTimingFunction: {
        'apple': 'ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
        '.transform-gpu': {
          transform: 'translate3d(0, 0, 0)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};

export default config;