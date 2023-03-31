/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "oxford-blue": "#0A192F",
        aquamarine: "#00ffc5",
        teal: "#0E7C7B",
        "mountbatten-pink": "#847996",
        madder: "#A31621",
        "teal-small": "#57b3b1",
      },
      fontFamily: {
        title: ["var(--font-luckiestguy)"],
        body: ["var(--font-ubuntu)"],
        body_alt: ["var(--font-opensans)"],
      },
    },
  },
  plugins: [],
};
