const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        // grey: 'rgb(25, 21, 22, 60)',
        'pastel-green': '#DBF08D',
        'pastel-green-light': '#F7FFDA',
        'light-purple': '#DECCFA',
        'pastel-blue': '#9DD3E8',
        'pastel-blue-light': '#E2F7FF'
      },
      textColor: {
        // grey: 'rgb(25, 21, 22, 60)',
      },
      }
    },
  plugins: [
    flowbite.plugin(),
  ],
}

