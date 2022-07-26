/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-dark-blue': '#4369B2',
        'more-darker-blue': '#35548B',
        'my-light-blue': '#5687E2',
      },
      spacing: {
        47: '11.3rem',
      },
    },
  },
  plugins: [],
};
