/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "gray": "#E0E0E0",
        "tx-content": "#002C43",
        "tx-header": "#99ADB7",
        "bg-text": "#DFF8EC",
        "bg-section": "#00324B",
        "bg-adventure": "#DFF8EB",
        "white" : "#00324B",
        "white\/50" : "#99ADB7"
      },
      keyframes: {
        slideRightQuarter: {
          '0%': { transform: 'translateX(-0%)' },
          '100%': { transform: 'translateX(-187.5%)' },
        },
        slideLeftQuarter: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(187.5%)' },
        }
      },
    },
    screens: {
      'sm': '718px',
      'md': '960px',
      'lg': '1024px',
      'xl': '1440px'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

