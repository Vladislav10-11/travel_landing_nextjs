/** @type {import('tailwindcss').Config} */
module.exports = {
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
      screens: {
        sm: "375px",
        md: "1024px",
        lg: "1280px",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-sen)"],
      },
      colors: {
        primaryColor: "#F66F4D",
        linkColor: "#2E476B",
        textColor: "#5B5F62",
        blackColor: "#2D3134",
        bgColor: "#FAF8ED",
      },
      
    },
  },
  plugins: [],
};
