import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'nBlue': '#24234a',
        'dBlue': '#0f283d',
        // 'beige': '#eddab3',
        // 'grey': '#645F5B',
        'black': '#000000',
       "gray" : '#cccccc'
        // 'purple' : '#4e325b'
      },
    },
  },
  plugins: [],
};
export default config;
