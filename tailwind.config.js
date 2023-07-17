const newLocal = "tw-elements/dist/plugin.cjs";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        white: "#ffffff",
        yellow: "#FCF4CA",
        yellow_dark: "#5C4D05",
        primary: "#F5D437",
        primary_dark: "#BD9E09",
        grey: "#343434",
        olive_dark: "#2C2502",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bermuda: "#78dcca",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans"],
      },
    },
  },
  plugins: [require(newLocal)]
};
