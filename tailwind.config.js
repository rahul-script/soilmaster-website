/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#fff",
        "custom-green": "#1ed760",
        "custom-green-70": "#037C1EB2",
        "custom-blue": "#228FE0 ",
        "custom-black": "#272727",
      },
    },
  },
  plugins: [],
};
