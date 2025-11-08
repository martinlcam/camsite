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
        // Use CSS variables for dynamic theming
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
    },
  },
  plugins: [],
};

export default config;
