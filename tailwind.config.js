/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0057E4",
        "tab-color": "#F9FCFF",
        "light-color": "#EBF3FF",
        "border-color": "#595959",
        "button-text": "#2F2F2F",
        "grey-bg": "#F0F0F0",
        "tab-border-color": "#8FAEFF",
        "footer-color": "#5B749C",
        "about-text-color":"#363840",
      },
      borderRadius: {
        lg: "10px",
      },
      fontFamily: {
        gola: ["Golos Text", "sans-serif"],
      },
      fontSize: {
        size28: "28px",
        size56: "56px",
        size32:"32px"
      },
      screens: {
        mobile: { min: "320px", max: "767px" },
        tablet: { min: "768px", max: "1023px" },
        desktop: { min: "1024px"},
        tabanddesk: { min: "768px"},
      },
      lineHeight: {
        lineheight67: "67px",
      },
      width: {
        width95: "90%",
      },
      blur: {
        blur150: '150px',
      }
    },
  },
  plugins: [],
};
