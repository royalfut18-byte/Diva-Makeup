/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: { DEFAULT: '#F7E7CE', light: '#FDF5E6', dark: '#E8D4B5' },
        ivory: { DEFAULT: '#FDFBF7', warm: '#FAF6F0', cream: '#FFF8F0' },
        blush: { DEFAULT: '#F8E8E0', light: '#FDF2ED', deep: '#F0D4C8' },
        'rose-beige': { DEFAULT: '#E8C4B8', light: '#F2D8CF', dark: '#D4A898' },
        'warm-gold': { DEFAULT: '#B8860B', light: '#D4AF37', dark: '#8B6914', muted: '#C9A96E' },
        espresso: { DEFAULT: '#2C1810', light: '#3C2415', medium: '#4A3020' },
        'soft-black': '#1A1A1A',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(-100%)' },
          '50%': { opacity: '0.6', transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'luxury': '0 25px 60px -15px rgba(184, 134, 11, 0.15)',
        'luxury-lg': '0 35px 80px -20px rgba(184, 134, 11, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.08)',
        'gold': '0 0 40px rgba(184, 134, 11, 0.15)',
        'inner-glow': 'inset 0 0 30px rgba(184, 134, 11, 0.05)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #FDFBF7 0%, #FDF5E6 30%, #FDF2ED 70%, #FAF6F0 100%)',
        'gradient-hero': 'radial-gradient(ellipse at 30% 50%, rgba(247,231,206,0.5) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(248,232,224,0.4) 0%, transparent 50%)',
        'gradient-gold': 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #C9A96E 100%)',
        'gradient-section': 'linear-gradient(180deg, #FDFBF7 0%, #FAF6F0 50%, #FDF2ED 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
