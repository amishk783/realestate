/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      backgroundColor: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      backgroundImage: {
        hero: "url(/src/assets/heroBgImage.png)",
        home: "url(/src/assets/homeBg.png)",
      },
      fontFamily: {
        jarkata: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderColor: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
