// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobileS: "150px",
      mobileM: "320px",
      mobileL: "425px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "header-background": "url('public/asset/header-background.jpeg')",
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
      backfaceVisibility: ["hover", "focus"],
    },
  },
  plugins: [],
};
