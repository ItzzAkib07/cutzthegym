/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080808',
          secondary: '#111111',
          card: '#171717',
          surface: '#1E1E1E',
          glass: 'rgba(23, 23, 23, 0.75)',
        },
        gold: {
          light: '#F5DE9C',
          highlight: '#E6C36A',
          DEFAULT: '#C9A04A',
          dark: '#9E7B2F',
          muted: 'rgba(201, 160, 74, 0.35)',
        },
        silver: {
          light: '#F0F0F0',
          DEFAULT: '#D1D1D1',
          dark: '#8E8E8E',
        },
        text: {
          primary: '#FFFFFF',
          body: '#D1D1D1',
          supporting: '#B8B8B8',
          muted: '#A3A3A3',
        },
        supporting: '#B8B8B8',
        muted: '#A3A3A3',
        borderGold: 'rgba(201, 160, 74, 0.25)',
      },
      fontFamily: {
        hero: ['Anton', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
        heading: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        editorial: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(201, 160, 74, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(201, 160, 74, 0.35)',
        'silver-glow': '0 0 25px rgba(214, 214, 214, 0.2)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E6C36A 0%, #C9A04A 50%, #9E7B2F 100%)',
        'silver-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #D6D6D6 50%, #8E8E8E 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(23,23,23,0.95) 0%, rgba(17,17,17,0.98) 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(201,160,74,0.12) 0%, rgba(8,8,8,0) 70%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
