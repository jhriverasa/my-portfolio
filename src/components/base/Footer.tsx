import { LangConstantsType } from "@/constants"
import { selectedLangState } from "@/store/langSlice"
import { useSelector } from "react-redux"
import NextIcon from "@/components/svg/NextIcon"
import ReactIcon from "@/components//svg/ReactIcon"
import TailwindIcon from "@/components//svg/TailwindIcon"
import TypescriptIcon from "@/components//svg/TypescriptIcon"

const Footer = () => {
  const lang = useSelector(selectedLangState)
  return (
    <div className=" flex flex-col rounded-lg px-6 mt-16 mb-8">
      <div className=" flex flex-col items-center justify-center">
        <div className="flex text-transparent text-stroke-slate tracking-wider font-title text-xl mb-4">
          <div className="mr-1">{localCts.madewith[lang]}</div>
          <div className="stroke-slate-900 text-red-700 mr-1">{` ♥ `}</div>
          <div>{localCts.and[lang]}</div>
        </div>
        <div className="flex items-center">
          <div className="w-6 lg-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-2 cursor-pointer">
            <a target="_blank" href="https://react.dev/" rel="noopener noreferrer">
              <ReactIcon />
            </a>
          </div>
          <div className="w-6 lg-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-2 cursor-pointer">
            <a target="_blank" href="https://nextjs.org/" rel="noopener noreferrer">
              <NextIcon />
            </a>
          </div>
          <div className="w-6 lg-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-2 cursor-pointer">
            <a target="_blank" href="https://www.typescriptlang.org/" rel="noopener noreferrer">
              <TypescriptIcon />
            </a>
          </div>
          <div className="w-6 lg-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-2 cursor-pointer ">
            <a target="_blank" href="https://tailwindcss.com/" rel="noopener noreferrer">
              <TailwindIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

export const localCts: LangConstantsType = {
  madewith: {
    es: "Hecho con",
    en: "Made with",
  },
  and: {
    en: "and ...",
    es: "y ...",
  },
}
