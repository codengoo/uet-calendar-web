import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#42298b"
      },
      screens: {
        "xs": "520px",
        "xxs:": "390px"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
