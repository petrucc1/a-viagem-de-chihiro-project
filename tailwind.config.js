/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '26px 24px 90px 0px rgba(31, 26, 51, 0.13)',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(130deg, #628E75 0.66%, #1A4855 83.32%)',
      },
      transform: {
        '-skew-24': 'skew(-24deg);',
      },
    },
  },
  plugins: [],
}