/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1124px",
        lgDesktop: "1366px",
        "2/5": "2/5",
      },
      width: {
        sideNav: "400px",
        desktop: "1124px",
      },
      height: {
        hero: "calc(100vh - 100px)",
      },
      backgroundImage: {
        hero: "linear-gradient(180deg, #0c0c12, #111132)",
      },
      textColor: {
        headerHero: "rebeccapurple",
        "moving-text" : "#ffffff09"
      },
      letterSpacing: {
        "hero-header": "8px",
      },
    },
  },
  plugins: [],
};
