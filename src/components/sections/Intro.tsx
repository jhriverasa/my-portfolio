import { LangConstantsType } from "@/constants";
import { selectedLangState } from "@/store/langSlice";
import { useSelector } from "react-redux";

const Intro = () => {
  const lang = useSelector(selectedLangState);

  return (
    <div className="flex flex-col font-body_alt  my-4" data-aos="fade-up">
      <h1 className="text-slate-400 font-bold text-5xl">{localCts.hello[lang]}</h1>
      <div className=" text-slate-500 text-justify italic">
        {localCts.description[lang]}
      </div>
    </div>
  );
};

export default Intro;

export const localCts: LangConstantsType = {
  hello: { en: "Hello", es: "Hola" },
  description: {
    en: "My name is Jhonatan Rivera Saumeth, I am a Systems and Computing Engineer, I am passionate about projects that seek to change the world to make it a better place to live.",
    es: "Mi nombre es Jhonatan Rivera Saumeth soy Ingeniero de Sistemas y Computación, me apasionan los proyectos que buscan cambiar el mundo para convertirlo en un lugar mejor.",
  },
};
