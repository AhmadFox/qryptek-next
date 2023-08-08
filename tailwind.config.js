/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '491px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1450px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1736px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: '0.56rem',//9px
      sm: '0.75rem',//12px
      base: '0.875rem',//14px
      lg: '1rem',//16px
      xl: '1.25rem',//20px
      '2xl': '1.375rem', // 22px
      '3xl': '1.953rem', // 31px
      '4xl': '2.5rem', // 40px
      '5xl': '3.052rem', // 48px
      '6xl': '3.5rem', // 56px
      '7xl': '4.375rem', // 70px
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark': '#010101',
        'light': '#F1F1F1',
        'gray-100': '#D2D2D2',
        'gray-300': '#737373',
        'gray-400': '#646464',
        'gray-500': '#9E9E9E',
        'gray-800': '#131313',
        'orange-500': '#E76F2C',
        'purple-500': '#6F2E8F',
        'purple-600':'#5A2873',
        'vaiolet-500': '#7C1DC9'
      },
      fontFamily: {
        primary: "OpenSanse",
        secondary: "pirulen"
      },
      spacing: {
        '54': '13.5rem'
      }
    },
  },
  plugins: [],
}
