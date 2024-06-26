import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans Variable", ...defaultTheme.fontFamily.sans],
        anton: ["Anton", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#ffffe3",
        dark: "#000000",
        secondary: "#e7ff00",
        secondaryPurple: "#6441a4",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
