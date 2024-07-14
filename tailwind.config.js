/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Agbalumo: "Agbalumo",
      },
      colors: {
        primary: "#FF0000",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      },
      aspectRatio: {
        "4/3": "4/3",
        "3/4": "3/4",
      },
    },
  },
  plugins: [],
};
