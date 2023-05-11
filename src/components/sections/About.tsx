import { LangConstantsType } from "@/constants"
import { selectedLanguageState } from "@/redux/slices/languageSlice"
import { useSelector } from "react-redux"

const About = () => {
  const lang = useSelector(selectedLanguageState)
  return (
    <div
      className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4"
      data-aos="fade-up"
      data-aos-duration="750"
    >
      <div className="animate__fadeIn flex justify-center items-center mt-2 mb-4 ">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate ">{localCts.whoAmI[lang]}</div>
      </div>

      <p className="animate__fadeIn text-justify text-md text-slate-400 ">{localCts.description[lang]}</p>
    </div>
  )
}

export default About

export const localCts: LangConstantsType = {
  whoAmI: { en: "Who am I", es: "Quién soy ?" },
  description: {
    en: "(Without going into philosophical debates) I can say that I am a motivated, self-taught person, with high resilience, who constantly seeks to learn new things, I sincerely believe that in order to overcome the difficulties that are found on the way, a focus on solutions must be sought and not in the problems. I usually give 200%  for the things that really interest me and I have a very high level of perseverance to achieve the proposed objectives.",
    es: "(Sin entrar en debates filosóficos) podría decir que soy una persona motivada, autodidacta, con alta resiliencia, que busca constantemente aprender nuevas cosas, creo sinceramente, que para sortear las dificultades que se van encontrando camino, se debe buscar un enfoque en soluciones y no en los problemas. Suelo dar el 200% de lo que soy por las cosas que realmente me interesan y poseo un nivel altísimo de perseverancia para alcanzar los objetivos propuestos.",
  },
}
