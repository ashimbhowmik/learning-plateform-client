/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#09ef4e",

          secondary: "#e226a7",

          accent: "#0d93a5",

          neutral: "#322235",

          "base-100": "#FFFFFF",

          info: "#29A8DB",

          success: "#22E282",

          warning: "#F5A329",

          error: "#F37297",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
