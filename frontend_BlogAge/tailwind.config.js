/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', "sans-serif"],
        Cinzel: ['"Cinzel"',"sans-serif"],
        Signika:['"Signika"',"sans-serif"]
      },
    },
  },
  plugins: [],
};
