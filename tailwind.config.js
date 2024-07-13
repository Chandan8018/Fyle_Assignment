const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        "cormorant-sc": ['"Cormorant SC"', "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
