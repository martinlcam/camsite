import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },
      colors: {
        // Keyboard-inspired color palette
        palette: {
          // Light blue (from keyboard top row)
          blue: {
            100: "#0A2761",
            95: "#1A3A7A",
            90: "#2A4D93",
            85: "#3A60AC",
            80: "#4A73C5",
            75: "#5A86DE",
            70: "#6A99F7",
            65: "#7AACFF",
            60: "#8ABFFF",
            55: "#9AD2FF",
            50: "#AAD5FF",
            45: "#BAE8FF",
            40: "#CAEBFF",
            35: "#DAEEFF",
            30: "#EAF1FF",
            25: "#F0F5FF",
            20: "#F5F8FF",
            15: "#FAFBFF",
            10: "#FDFEFF",
            0: "#FFFFFF",
          },
          // Dark purple (from keyboard modifiers/spacebar)
          purple: {
            100: "#140523",
            95: "#1E0836",
            90: "#270A47",
            85: "#300D59",
            80: "#370F6B",
            75: "#49148F",
            70: "#5C1983",
            65: "#6E1FD6",
            60: "#843BE3",
            55: "#9B61E8",
            50: "#AD70EB",
            45: "#C294F0",
            40: "#CBA8F0",
            35: "#D5B9F3",
            30: "#DDC9F7",
            25: "#EADCF9",
            20: "#F4EDFD",
            15: "#F9F5FF",
            10: "#FCFAFF",
            0: "#FFFFFF",
          },
          // Transparent purple (from keyboard transparent keys)
          purpleTransparent: {
            100: "rgba(110, 31, 214, 1)",
            90: "rgba(110, 31, 214, 0.9)",
            80: "rgba(110, 31, 214, 0.8)",
            70: "rgba(110, 31, 214, 0.7)",
            60: "rgba(110, 31, 214, 0.6)",
            50: "rgba(110, 31, 214, 0.5)",
            40: "rgba(110, 31, 214, 0.4)",
            30: "rgba(110, 31, 214, 0.3)",
            20: "rgba(110, 31, 214, 0.2)",
            10: "rgba(110, 31, 214, 0.1)",
          },
          // White (from keyboard alphanumeric keys)
          white: {
            DEFAULT: "#FFFFFF",
            off: "#FAFAFA",
            warm: "#FFFBF5",
          },
          // Gray scale
          gray: {
            100: "#000000",
            95: "#0F0F0F",
            90: "#141414",
            85: "#171717",
            80: "#1B1B1B",
            75: "#1D1D1D",
            70: "#222222",
            65: "#292929",
            60: "#333333",
            55: "#4C4C4C",
            50: "#666666",
            45: "#818181",
            40: "#999999",
            35: "#B3B3B3",
            30: "#CCCCCC",
            25: "#D6D6D6",
            20: "#EBEBEB",
            15: "#F1F1F1",
            10: "#FAFAFA",
            0: "#FFFFFF",
          },
        },
      },

      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0)" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
