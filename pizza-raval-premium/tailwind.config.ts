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
        ink:     "rgb(var(--c-ink) / <alpha-value>)",
        bone:    "rgb(var(--c-bone) / <alpha-value>)",
        tomato:  "rgb(var(--c-tomato) / <alpha-value>)",
        brass:   "rgb(var(--c-brass) / <alpha-value>)",
        olive:   "rgb(var(--c-olive) / <alpha-value>)",
        wapp:    "#25D366",
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        head:    ['"Inter Tight"', 'system-ui', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.04em',
      },
    },
  },
  plugins: [],
};

export default config;
