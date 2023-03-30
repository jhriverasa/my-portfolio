import "@/styles/globals.css";
import "aos/dist/aos.css"; // Animations

import AOS from "aos";
import type { AppProps } from "next/app";
import { useEffect } from "react";

// pages/_app.js

import { Gajraj_One, Ubuntu, Open_Sans } from "next/font/google"; //fonts (check in tailwind.config.js )

const gajrajOne = Gajraj_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gajraj",
});
const opensans = Open_Sans({ variable: "--font-opensans", subsets: ["latin"] });
const ubuntu = Ubuntu({
  weight: "400",
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init(); //Inititalize after component mounts
  }, []);

  return (
    <main
      className={`${gajrajOne.variable} ${ubuntu.variable} ${opensans.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
