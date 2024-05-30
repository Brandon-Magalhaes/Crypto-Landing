import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundBlue: "#1B004E",
        backgroundWhite: "#FFF6FB",
        buttonOrange: "#EB5757",
        textGray: "#828282",
        textFotterGray: "#E6E6E6",
        textDescriptionCard: "#4F4F4F",
        textDataCard: "#616161",
        textCopy: "#BCBCBC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(90deg, #4e0062 0%, #220076 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
