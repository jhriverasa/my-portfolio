import { LangConstantsType } from "@/constants"
import { selectedLanguageState } from "@/redux/slices/languageSlice"
import { useSelector } from "react-redux"

const WhyMe = () => {
  const lang = useSelector(selectedLanguageState)
  return (
    <div className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4" data-aos="fade-up">
      <div className="flex justify-center items-center mt-2 mb-4">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate">{localCts.whyMe[lang]}</div>
      </div>

      <div className="text-justify  text-slate-400 flex flex-col text-md">
        <div className="my-1">
          <span className="mr-2 font-body_alt italic underline font-bold text-aquamarine">
            {localCts.autodidact[lang]}:
          </span>
          <span>{localCts.autodidactParagraph[lang]}</span>
        </div>

        <div className="my-1">
          <span className="mr-2 font-body_alt italic font-bold text-aquamarine">{localCts.creative[lang]}:</span>
          <span>{localCts.creativeParagraph[lang]}</span>
        </div>
        <div className="my-1">
          <span className="mr-2 font-body_alt italic font-bold text-aquamarine">{localCts.decisive[lang]}:</span>
          <span>{localCts.decisiveParagraph[lang]}</span>
        </div>

        <div className="my-1">
          <span className="mr-2 font-body_alt italic font-bold text-aquamarine">{localCts.mediator[lang]}:</span>
          <span>{localCts.mediatorParagraph[lang]}</span>
        </div>

        <div className="my-1">
          <span className="mr-2 font-body_alt italic font-bold text-aquamarine">{localCts.responsible[lang]}:</span>
          <span>{localCts.responsibleParagraph[lang]}</span>
        </div>
      </div>
    </div>
  )
}

export default WhyMe

export const localCts: LangConstantsType = {
  whyMe: { en: "Why should you choose me?", es: "Por qué deberías elegirme?" },
  autodidact: {
    en: "Self-taught person",
    es: "Autodidacta",
  },
  autodidactParagraph: {
    es: "Todo lo que he aprendido, incluso estudiando en la universidad lo he hecho por mi mismo, me gusta investigar, leer, documentarme, y poner en práctica cada una de las cosas que aprendo.",
    en: "Everything I have learned, even studying at the university I have done by myself, I like to investigate, read, document myself, and put into practice each of the things I learn.",
  },
  creative: {
    en: "Creative",
    es: "Creativo",
  },
  creativeParagraph: {
    es: "Siempre he sabido idear soluciones a los problemas que se me presentan tanto en la vida como en el trabajo.",
    en: "I have always known how to devise solutions to the problems that arise both in life and at work.",
  },
  decisive: {
    en: "Decisive",
    es: "Resolutivo",
  },
  decisiveParagraph: {
    es: "Me enfoco siempre en la solución y no en el problema en sí.",
    en: "I always focus on the solution and not on the problem itself.",
  },
  mediator: {
    en: "Mediator",
    es: "Mediador",
  },
  mediatorParagraph: {
    es: "Soy una persona empática, suelo ponerme en la posición del otro e intentar enteder sus razones, todos los seres humanos cometemos errores.",
    en: "I am an empathetic person, I usually put myself in the other's position and try to understand their reasons, all human beings make mistakes.",
  },
  responsible: {
    en: "Responsible",
    es: "Responsable",
  },
  responsibleParagraph: {
    es: "Soy muy cuidadoso y detallista con lo que entrego como mi trabajo, no solo intento entregar lo mejor sino que también busco constantemente maneras de mejorar lo que hago.",
    en: "I am very careful and detail-oriented with what I deliver as my work, I not only try to deliver the best but I also constantly look for ways to improve what I do.",
  },
}
