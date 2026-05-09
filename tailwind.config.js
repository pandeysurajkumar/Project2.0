/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "surface-container-low": "#0d1c2d",
        "secondary-fixed": "#dae2fd",
        "primary-fixed-dim": "#4edea3",
        "surface-container-high": "#1c2b3c",
        "outline-variant": "#3c4a42",
        "surface-dim": "#051424",
        "background": "#051424",
        "primary": "#4edea3",
        "primary-container": "#10b981",
        "on-surface": "#d4e4fa",
        "on-surface-variant": "#bbcabf",
        "surface-variant": "#273647",
        "outline": "#86948a",
      },

      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },

      spacing: {
        md: "24px",
        xl: "48px",
        base: "4px",
        sm: "16px",
        xs: "8px",
        lg: "32px",
        gutter: "24px",
        margin: "32px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      fontSize: {
        "display-xl": [
          "48px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],

        "display-lg": [
          "36px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],

        "headline-md": [
          "24px",
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
      },
    },
  },

  plugins: [],
};