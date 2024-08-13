/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        'color-gradient':
          'linear-gradient(270.78deg, #ffa7a9 4.19%, #ff5ea3 96.11%)',
      },
      backgroundColor: {
        'blue-main': '#151937',
      },
      flex: {
        '2': '2 2 0%',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
