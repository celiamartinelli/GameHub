/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobileS: "320px",
      // => @media (min-width: 320px) { ... }

      mobileL: "425px",
      // => @media (min-width: 425px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: (theme) => ({
        "header-background": "url('public/asset/header-background.jpeg')",
      }),
      // dedans tu écriras tes couleurs, tailles, polices, etc.
    },
  },
  plugins: [],
};
