/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lumen: {
          gold: "#e8c88e",
          cream: "#f5efe4",
          muted: "#c8bca9",
        },
      },
    },
  },
  plugins: [],
};
