/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F5B700',
          light: '#FFC72C',
          dark: '#D4A000',
          pale: '#FFF8E1',
        },
        farm: {
          green: '#4E7D32',
          'green-light': '#6aab40',
        },
        dark: {
          DEFAULT: '#111111',
          card: '#1a1a1a',
          surface: '#1f1f1f',
        },
        cream: '#EAEAEA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'feather-drift': 'feather-drift 12s ease-in-out infinite',
        'feather-drift-2': 'feather-drift 16s ease-in-out infinite reverse',
        'feather-drift-3': 'feather-drift 20s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(245, 183, 0, 0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(245, 183, 0, 0.8), 0 0 100px rgba(245, 183, 0, 0.3)' },
        },
        'feather-drift': {
          '0%': { transform: 'translateY(-10vh) translateX(0px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(110vh) translateX(60px) rotate(360deg)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5B700, #FFC72C)',
        'gold-gradient-dark': 'linear-gradient(135deg, #D4A000, #F5B700)',
        'dark-gradient': 'linear-gradient(135deg, #111111, #1a1a1a)',
      },
    },
  },
  plugins: [],
};
