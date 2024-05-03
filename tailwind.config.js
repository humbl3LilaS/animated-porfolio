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
        services: "300px",
      },
      height: {
        hero: "calc(100vh - 100px)",
        services: "80px",
      },
      backgroundImage: {
        primary: "linear-gradient(180deg, #0c0c1d, #111132)",
        services: "linear-gradient(180deg, #111132, #0c0c1d)",
        projects: "linear-gradient(180deg, #111132, #505064)",
        mountains: "url('/public/mountains.png')",
        planets: "url('/public/planets.png')",
        stars: "url('/public/stars.png')",
        sun: "url('/public/sun.png')",
      },
      textColor: {
        headerHero: "rebeccapurple",
        "moving-text": "#ffffff09",
      },
      letterSpacing: {
        "hero-header": "8px",
      },
      borderRadius: {
        services: "50px",
      },
    },
  },
  plugins: [],
};
