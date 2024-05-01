/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1124px",
        lgDesktop: "1366px",
      },
      width: {
        sideNav: "400px",
      },
    },
  },
  plugins: [],
};
