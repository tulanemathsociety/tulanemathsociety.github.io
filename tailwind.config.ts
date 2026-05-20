import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tulane: {
          green: "#255C4E",
          "pale-green": "#E7F2E0",
          olive: "#9BA64A",
          "secondary-green": "#688C3E",
          cream: "#F0EBDB",
          "warm-gray": "#EDECE8",
          sky: "#6FC5E8",
          blue: "#138094",
          navy: "#001B3F",
          charcoal: "#343333",
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Times", '"Times New Roman"', "serif"],
      },
      backgroundImage: {
        "graph-paper":
          "linear-gradient(to right, rgba(37,92,78,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,92,78,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "graph-sm": "24px 24px",
        "graph-md": "40px 40px",
      },
      keyframes: {
        "wave-slow": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-24px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "wave-slow": "wave-slow 8s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
