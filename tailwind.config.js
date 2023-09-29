/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      signature: 'Ms Madi',
    },
    colors: {
      ...colors,
      forestGreen: '#2e5e4e',
      lightSage: '#5f8569',
      lightGreen: '#9adaab',
      aqua: '#73c6b9',
      lightAqua: '#acd8d4',
      white: '#fff',
      opacityBlack: '#00000080',
      opacityLightBlack: '#24242480',
      lavender: '#B388DD',
      lavender2: '#b492d0',
      darkPurple: '#4b3ea1',
      opacityPurple: '#4B3EA18E',
      magenta: '#c374c5',
      opacityMagenta: '#c474c515',
      transparent: '#00000000',
    },
  },
  plugins: [],
};
