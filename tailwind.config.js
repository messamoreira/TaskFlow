/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        surface: "#2a2a2a",
        primary: "#ea580c",
        "primary-foreground": "#ffffff",
        muted: "#3a3a3a",
        "muted-foreground": "#a1a1aa",
      },
    },
  },
  plugins: [],
};
