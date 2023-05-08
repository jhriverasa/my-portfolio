import { useState, useEffect } from "react";
import { selectedLangState, setSelectedLang } from "../store/langSlice";
import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";
import NeonLink from "./ui/NeonLink";
import { LangConstantsType } from "@/constants";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Change state language
  const lang = useSelector(selectedLangState);
  const dispatch = useDispatch();
  const handleChangeLanguage = () => {
    dispatch(setSelectedLang(lang === "es" ? "en" : "es"));
  };
  return visible ? (
    <div
      className={`top-0 animate__animated animate__fadeInDown animate__faster z-10 Right sticky shadow-sm shadow-indigo-400 bg-slate-900 text-teal flex  lg:justify-between lg:items-center px-[5vw]`}
    >
      <div className="w-1/4 flex  items-center">
        <div className="relative flex lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6">
          <Image
            className=" hover:cursor-pointer"
            alt="Logo"
            src="/img/logo.png"
            fill
          />
        </div>
      </div>

      <div className=" w-3/4 flex justify-end items-center font-title tracking-wider lg:text-2xl md:text-lg">
        <NeonLink text={localCts.about[lang]} href="#" />
        <NeonLink text={localCts.experience[lang]} href="#" />
        <div
          className="relative flex justify-center items-center lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6"
          onClick={handleChangeLanguage}
        >
          <Image
            className="hover:cursor-pointer"
            alt="Logo"
            src={`/img/${lang != "es" ? "spain" : "uk"}-flag.png`}
            fill
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export const localCts: LangConstantsType = {
  about: { en: "About", es: "Sobre mi" },
  experience: {
    en: "Experience",
    es: "Experiencia",
  },
};

export default NavBar;
