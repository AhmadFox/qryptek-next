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
      // => @media (min-'640px) { ... }

      'md': '768px',
      // => @media (min-'768px) { ... }

      'lg': '1024px',
      // => @media (min-'1024px) { ... }

      'xl': '1280px',
      // => @media (min-'1280px) { ... }

      '2xl': '1450px',
      // => @media (min-'1536px) { ... }

      '3xl': '1736px',
      // => @media (min-'1536px) { ... }
    },
    fontSize: {
      xs: '0.75rem', //12px
      sm: '0.875rem', //14px
      base: '1rem', //16px
      lg: '1.125rem', //18px
      xl: '1.25rem', //20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.953rem', // 32px
      '4xl': '2.5rem', // 40px
      '5xl': '2.875rem', // 47px
      '6xl': '3.75rem', // 60px
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
        'gray-100': '#E0E0E0',
        'gray-200': '#D2D2D2',
        'gray-300': '#737373',
        'gray-400': '#646464',
        'gray-500': '#9E9E9E',
        'gray-800': '#131313',
        'orange-500': '#E76F2C',
        'orange-600': '#C55316',
        'purple-500': '#6F2E8F',
        'purple-600':'#5A2873',
        'vaiolet-500': '#7C1DC9'
      },
      fontFamily: {
        primary: "OpenSanse",
        secondary: "pirulen"
      },
      spacing: {
        '54': '13.5rem',
        '1/2':'50%',
        '1/3':'33.333333%',
        '2/3':'66.666667%	',
        '1/4':'25%',	
        '2/4':'50%',	
        '3/4':'75%',	
        '1/5':'20%'	,
        '2/5':'40%',
        '3/5':'60%'	,
        '4/5':'80%'	,
        '1/6':'16.666667%',	
        '2/6':'33.333333%'	,
        '3/6':'50%'	,
        '4/6':'66.666667%'	,
        '5/6':'83.333333%'	,
        '1/12':'8.333333%'	,
        '2/12':'16.666667%'	,
        '3/12':'25%'	,
        '4/12':'33.333333%'	,
        '5/12':'41.666667%',
        '6/12':'50%'	,
        '7/12':'58.333333%'	,
        '8/12':'66.666667%'	,
        '9/12':'75%'	,
        '10/12':'83.333333%'	,
        '11/12':'91.666667%',
        'full':'100%',
      },
      fill: {
        gradient: 'url(#analyiz_svg__a)',
      },
    },
  },
  plugins: [],
}
