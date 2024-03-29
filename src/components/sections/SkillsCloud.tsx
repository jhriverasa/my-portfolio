import { LangConstantsType } from "@/constants"
import { selectedLanguageState } from "@/redux/slices/languageSlice"
import { useSelector } from "react-redux"

import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud"

const SkillsCloud = () => {
  const lang = useSelector(selectedLanguageState)
  return (
    <div className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4" data-aos="fade-up">
      <div className="flex justify-center items-center mt-2 mb-4">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate">{localCts.skills[lang]}</div>
      </div>
      <div className="flex justify-center font-bold font-body_alt text-2xl">
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 3,
            maxSpeed: "fast",
            useContainerInlineStyles: true,
            useItemInlineStyles: true,
          })}
          onClick={(tag: string, ev: MouseEvent) => console.log(tag)}
          onClickOptions={{ passive: true }}
        >
          {skillsArray}
        </TagCloud>
      </div>
    </div>
  )
}

const skillsArray: string[] = [
  "Git",
  "Javascript",
  "ReactJS",
  "NextJS",
  "Python",
  "MySQL",
  "Tailwind",
  "PostgreSQL",
  "Prisma",
  "NodeJS",
  "Salesforce",
  "Docker",
  "GraphQL",
  "Data Structures",
]
export default SkillsCloud

export const localCts: LangConstantsType = {
  skills: { es: "Habilidades", en: "Skills" },
}
