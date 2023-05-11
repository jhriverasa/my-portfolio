import { useEffect } from "react"
import type { AppProps } from "next/app"
import AOS from "aos"

//redux
import { store } from "@/redux/store"
import { Provider } from "react-redux"

import "@/styles/globals.css"
import "aos/dist/aos.css" // Animations

import { Luckiest_Guy, Ubuntu, Open_Sans } from "next/font/google" //fonts (check in tailwind.config.js )

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiestguy",
})
const opensans = Open_Sans({ variable: "--font-opensans", subsets: ["latin"] })
const ubuntu = Ubuntu({
  weight: "400",
  variable: "--font-ubuntu",
  subsets: ["latin"],
})

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init() //Inititalize after component mounts
  }, [])

  return (
    <Provider store={store}>
      <main className={`${luckiestGuy.variable} ${ubuntu.variable} ${opensans.variable}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}

export default App
