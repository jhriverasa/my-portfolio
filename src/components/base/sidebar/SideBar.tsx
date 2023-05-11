import { selectedLanguageState } from "@/redux/slices/languageSlice"
import { useSelector } from "react-redux"

import styles from "./SideBar.module.css"

import LinkedinIcon from "../../svg/LinkedinIcon"
import GithubIcon from "../../svg/GithubIcon"
import MailIcon from "../../svg/MailIcon"
import CurriculumIcon from "@/components/svg/CurriculumIcon"

const SideBar = () => {
  const lang = useSelector(selectedLanguageState)
  return (
    <div
      className={`animate__animated animate__bounceInUp ${styles["sidebar-container"]} left-[1%] bottom-[6%] flex flex-col text-3xl `}
    >
      <div className={`${styles["icon-container"]} w-8 lg:w-12 md:w-10 mt-4`}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jhonatan-rivera-saumeth-9879b2199/"
          rel="noopener noreferrer"
        >
          <LinkedinIcon fill="#9fc4f8" />
        </a>
      </div>
      <div className={`${styles["icon-container"]} w-8 lg:w-12 md:w-10 mt-4`}>
        <a target="_blank" href="https://github.com/jhriverasa" rel="noopener noreferrer">
          <GithubIcon fill="#9fc4f8" />
        </a>
      </div>
      <div className={`${styles["icon-container"]} w-8 lg:w-12 md:w-10 mt-4`}>
        <a target="_blank" href="mailto:jhriverasa@unal.edu.co" rel="noopener noreferrer">
          <MailIcon fill="#9fc4f8" />
        </a>
      </div>
      <div className={`${styles["icon-container"]} w-8 lg:w-12 md:w-10 mt-4`}>
        <a target="_blank" href={`/resume-${lang}.pdf`} rel="noopener noreferrer">
          <CurriculumIcon fill="#9fc4f8" />
        </a>
      </div>
    </div>
  )
}

export default SideBar
