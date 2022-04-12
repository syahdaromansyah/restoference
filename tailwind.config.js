const twDefaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xs': '375px',
      xs: '475px',
      ...twDefaultTheme.screens,
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway', ...twDefaultTheme.fontFamily.sans],
        inter: ['Inter', ...twDefaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
