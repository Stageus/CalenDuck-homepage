/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        keyColor: "#ff7f50",
        subColor: "#ffa07a",
        alertColor: "#ff6633",
        tagColor: "#ffe4b5",
        sidebarColor: "#fffaf0",
        grayColor: "#727272",
        lightgrayColor: "#e8e8e8",
      },
      height: {
        sidebar: "calc(100vh - 70px)",
      },
      boxShadow: {
        inputFocus: "0 0 0 2px #ff6633",
      },
    },
  },
  plugins: [],
};
