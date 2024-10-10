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
        'purple': '#AC80F399',
        'light-purple': 'rgba(222, 204, 250, 1)',
        'pastel-blue': '#9DD3E8',
        'pastel-blue-light': '#E2F7FF',
        'pom-white': '#f8f8f8'
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

