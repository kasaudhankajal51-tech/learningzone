/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js", // Flowbite
    "./src/**/*.{js,ts,jsx,tsx}",     // Your source files
    "./public/index.html",            // Any static HTML files
  ],
  theme: {
    extend: {}, // Customize Tailwind here if needed
  },
  plugins: [
    require("flowbite/plugin"),       // Flowbite Plugin
    require('flowbite-typography'),   
  ],
};
