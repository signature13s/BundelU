/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7B61FF',
        primaryLight: '#841FFD',
        white: '#ffffff',
        black: '#000000',
        gray: '#808080',
      },
      fontFamily: {
        Black: 'Merriweather-Black',
        BlackItalic: 'Merriweather-BlackItalic',
        Bold: 'Merriweather-Bold',
        BoldItalic: 'Merriweather-BoldItalic',
        Italic: 'Merriweather-Italic',
        Light: 'Merriweather-Light',
        LightItalic: 'Merriweather-LightItalic',
        Regular: 'Merriweather-Regular',
      },
    },
  },
  plugins: [],
};
