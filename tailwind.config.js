/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#c084fc",
          DEFAULT: "#8b5cf6",
          dark: "#6d28d9",
        },
        accent: {
          pink: "#ec4899",
          blue: "#3b82f6",
        },
      },
    },
  },
  plugins: [],
};
