import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },
      colors: {
        palette: {
          primary: {
            1: "hsl(var(--palette-primary-1) / <alpha-value>)",
            2: "hsl(var(--palette-primary-2) / <alpha-value>)",
            3: "hsl(var(--palette-primary-3) / <alpha-value>)",
            4: "hsl(var(--palette-primary-4) / <alpha-value>)",
            5: "hsl(var(--palette-primary-5) / <alpha-value>)",
            6: "hsl(var(--palette-primary-6) / <alpha-value>)",
            7: "hsl(var(--palette-primary-7) / <alpha-value>)",
            8: "hsl(var(--palette-primary-8) / <alpha-value>)",
            9: "hsl(var(--palette-primary-9) / <alpha-value>)",
            10: "hsl(var(--palette-primary-10) / <alpha-value>)",
            11: "hsl(var(--palette-primary-11) / <alpha-value>)",
            12: "hsl(var(--palette-primary-12) / <alpha-value>)",
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
      },
    },
  },
  plugins: [],
};

export default config;
