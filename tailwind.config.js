/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#243642",
          "secondary": "#629584",
          "accent": "#387478",
          "neutral": "#E2F1E7",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};