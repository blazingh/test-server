/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        white: '#ffffff',
        offwhite: '#F4F8FB',
        grey: '#868E96',
        blue: '#1E9EFC',
        middle: '#7950F2',
        purple: '#c926fc',
      },
      fontSize: {
        '3xs': '.61rem',
        '2xs': '.625rem',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        margin: 'margin',
        heightmargin: 'height, margin',
        rounded: 'border-radius',
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.5s ease-in-out both',
        'slide-out-right': 'slide-in-right 0.5s ease-in-out reverse both',
      },
      keyframes: {
        'slide-in-right': {
          '0%': {
            transform: 'translateZ(700px) translateX(400px)',
            opacity: '0',
          },
          to: {
            transform: 'translateZ(0) translateX(0)',
            opacity: '1',
          },
          'slide-out-right': {
            '0%': {
              transform: 'translateZ(700px) translateX(400px)',
              opacity: '0',
            },
            to: {
              transform: 'translateZ(0) translateX(0)',
              opacity: '1',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
