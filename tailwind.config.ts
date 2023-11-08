import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   purple: 'rgb(232 121 249)', 
      //   pink: 'rgb(219 39 119);'
      // },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config;
