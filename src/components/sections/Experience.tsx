import { LangConstantsType } from "@/constants"
import { selectedLanguageState } from "@/redux/slices/languageSlice"
import { useSelector } from "react-redux"

import Tabs, { TabsProps } from "@/components/shared/Tabs/Tabs"

const HelloBuildDescription = () => {
  const lang = useSelector(selectedLanguageState)
  return (
    <div>
      <div className="font-title tracking-widest text-lg text-aquamarine">HELLOBUILD, LLC</div>
      <div className="font-body italic font-bold ">{localCts.hellobuildPeriod[lang]}</div>
      <div className="py-2 font-body_alt text-justify text-teal-small ">{localCts.hellobuildParagraph[lang]}</div>
    </div>
  )
}

const ScotiabankDescription = () => {
  const lang = useSelector(selectedLanguageState)
  return (
    <div>
      <div className="font-title tracking-widest text-lg text-aquamarine">SCOTIABANK</div>
      <div className="font-body italic font-bold">{localCts.scotiabankPeriod[lang]}</div>
      <div className="py-2 font-body_alt text-justify">{localCts.scotiabankParagraph[lang]}</div>
    </div>
  )
}

const custTabList = [
  {
    label: "JS FULLSTACK DEV",
    component: <HelloBuildDescription />,
  },
  {
    label: "SALESFORCE TRAINEE/DEV",
    component: <ScotiabankDescription />,
  },
]

const Experience = () => {
  const lang = useSelector(selectedLanguageState)
  return (
    <section id="experience" className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4">
      <div className="flex justify-center items-center mt-2 mb-4 ">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate">{localCts.experience[lang]}</div>
      </div>
      <div data-aos="fade-up">
        <Tabs tabList={custTabList} />
      </div>
    </section>
  )
}

export default Experience

export const localCts: LangConstantsType = {
  experience: { en: "Experience", es: "Experiencia" },
  hellobuildParagraph: {
    es: "Durante mi estadía en la empresa Hellobuild que me brindo mi primera oportunidad laboral, hice parte del grupo de trabajo de Protrak (una aplicación para la gestión de proyectos), desarrollando funcionalidades preestablecidas y generando ideas que sirviesen como alternativas para la implementación de nuevas características. El stack tecnológico incluía ReactJS + NextJS en el Frontend y NodeJS+ Prisma-Nexus-GraphQL, y servicios como Stripe y Twillio para el Backend. En el proceso de desarrollo de esta aplicación fui reconocido múltiples veces por mi trabajo.",
    en: "During my stay at the Hellobuild company that gave me my first job opportunity, I was part of the Protrak working group (an application for project management), developing pre-established functionalities and generating ideas that served as alternatives for the implementation of new features. The tech stack included ReactJS + NextJS on the Frontend and NodeJS+ Prisma-Nexus-GraphQL, and services like Stripe and Twillio for the Backend. In the process of developing this application, I was recognized multiple times for my work.",
  },
  hellobuildPeriod: {
    es: "Enero 2020 - Enero 2021",
    en: "January 2020 - January 2021",
  },
  scotiabankParagraph: {
    es: "Debido a mi curiosidad por las distintas tecnologías apliqué para hacer parte de un entrenamiento en Salesforce, el programa de Salesforce Academy de Scotiabank que buscaba capacitar a desarrolladores en Salesforce para luego emplearlos en las distintas áreas que el banco requería. Durante los tres primeros meses tuve capacitación y terminé esta fase con honores teniendo las mejores puntuaciones del grupo en los exámenes de Certificación de Platform App Builder y Platform Developer I. Los meses restantes hice parte del equipo de Wealth Managemente del banco, un equipo de trabajo ubicado mayoritariamente en Canadá",
    en: "Due to my curiosity about the different technologies, I applied to be part of a training program at Salesforce, the Scotiabank Salesforce Academy program that sought to train developers in Salesforce and then employ them in the different areas that the bank required. During the first three months I was trained and I finished this phase with honors having the best scores in the group in the Platform App Builder and Platform Developer I Certification exams. The remaining months I was part of the bank's Wealth Management team, a work team located mostly in Canada",
  },
  scotiabankPeriod: {
    es: "Abril 2022 – Diciembre 2022",
    en: "April 2022 – December 2022",
  },
}
