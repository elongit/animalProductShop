/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#f43f5e",
      
        "secondary-color": "#A11735",
      },
      fontFamily: {
        Inter: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
