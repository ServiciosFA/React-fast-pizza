/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono,monospace',
    },
    extend: {
      fontSize: ['80 rem', { lineHeight: '1' }],
      height: { screen: '100dvh' },
    },
  },
  plugins: [],
};
