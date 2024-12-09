import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1D2B39',
          background2: '#2C3F4F',
          text: '#FFFFFF',
          text2: '#858D92',
          heading: '#F2F2F2',
          button: '#2D9CDB',
          border: '#2D9CDB',
          line: '#FFFFFF',
        },
        light: {
          background: '#FFFFFF',
          background2: '#F2F2F2',
          text: '#000000',
          text2: '#828282',
          heading: '#2B2B2B',
          button: '#1652F0',
          border: '#2D9CDB',
          line: '#000000',
        },
      },
    },
  },
  plugins: [],
};

export default config;
