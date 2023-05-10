import styles from "./SideBar.module.css";

import Image from "next/image";
import LinkedinIcon from "../../svg/LinkedinIcon";
import GithubIcon from "../../svg/GithubIcon";
import MailIcon from "../../svg/MailIcon";

const SideBar = () => {
  return (
    <div className={`animate__animated animate__bounceInUp ${styles["sidebar-container"]} left-[1%] bottom-[6%] flex flex-col text-3xl `}>
      <div className={`${styles["icon-container"]} w-8 lg:w-12 md:w-12 mt-4`}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jhonatan-rivera-saumeth-9879b2199/"
          rel="noopener noreferrer"
        >
          <LinkedinIcon fill="#9fc4f8" />
        </a>
      </div>
      <div className={`${styles["icon-container"]} w-8 lg:w-12 md:w-12 mt-4`}>
        <a
          target="_blank"
          href="https://github.com/jhriverasa"
          rel="noopener noreferrer"
        >
          <GithubIcon fill="#9fc4f8" />
        </a>
      </div>
      <div className={`${styles["icon-container"]} w-8 lg:w-12 md:w-12 mt-4`}>
        <a
          target="_blank"
          href="mailto:jhriverasa@unal.edu.co"
          rel="noopener noreferrer"
        >
          <MailIcon fill="#9fc4f8" />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
