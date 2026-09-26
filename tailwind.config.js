/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0a2a26',
          50: '#f0f7f5',
          100: '#d6ebe7',
          200: '#afdad2',
          300: '#7ec0b5',
          400: '#52a396',
          500: '#38877b',
          600: '#276c62',
          700: '#154e47',
          800: '#0a2a26',
          900: '#051b18'
        },
        ink: {
          DEFAULT: '#0a2a26',
          50: '#f0f7f5',
          100: '#d6ebe7',
          400: '#276c62',
          600: '#0a2a26',
          700: '#051b18',
          900: '#03110f'
        },
        gold: {
          DEFAULT: '#d4af37',
          100: '#fdf8e6',
          200: '#faeebe',
          300: '#f5de8b',
          400: '#e6c367',
          500: '#d4af37',
          600: '#b8860b',
          700: '#8c6711',
          800: '#63470a'
        },
        ivory: {
          DEFAULT: '#f7f3e9',
          50: '#fcfbf8',
          100: '#f7f3e9',
          200: '#ede5d5',
          300: '#dccfb8',
          400: '#c4b193'
        },
        sand: {
          DEFAULT: '#f7f3e9',
          100: '#fcfbf8',
          200: '#f7f3e9',
          300: '#ede5d5'
        },
        crimson: {
          DEFAULT: '#701426',
          600: '#8d1d33',
          700: '#701426',
          800: '#540e1c'
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        'cinzel-dec': ['"Cinzel Decorative"', 'serif'],
        amiri: ['"Amiri"', 'serif'],
        display: ['"Cinzel"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle at 50% 30%, rgba(212,175,55,0.22), rgba(5,27,24,0) 70%)',
        'gold-metallic': 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 25%, #b38728 50%, #fbf5b7 75%, #aa771c 100%)'
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' }
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' }
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        spinSlow: 'spinSlow 20s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        riseIn: 'riseIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        shimmer: 'shimmer 4s linear infinite'
      }
    }
  },
  plugins: []
}
