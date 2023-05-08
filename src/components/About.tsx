import { LangConstantsType } from "@/constants";
import { selectedLangState } from "../store/langSlice";
import { useSelector } from "react-redux";

const About = () => {
  const lang = useSelector(selectedLangState);
  return (
    <div
      className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4"
      data-aos="fade-up"
      data-aos-duration="750"
    >
      <div className="animate__fadeIn flex justify-center items-center mt-2 mb-4 ">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate ">
          {localCts.whoAmI[lang]}
        </div>
      </div>

      <p className="animate__fadeIn text-justify text-md text-slate-400 ">
        {localCts.description[lang]}
      </p>
    </div>
  );
};

export default About;

export const localCts: LangConstantsType = {
  whoAmI: { en: "Who am I", es: "Quién soy ?" },
  description: {
    en: "todo",
    es: "(Sin entrar en debates filosóficos) podría decir que soy una persona motivada, autodidacta, con alta resiliencia, que busca constantemente aprender nuevas cosas, creo sinceramente, que para sortear las dificultades que se van encontrando camino, se debe buscar un enfoque en soluciones y no en los problemas. Suelo dar el 200% de lo que soy por las cosas que realmente me interesan y poseo un nivel altísimo de perseverancia para alcanzar los objetivos propuestos.",
  },
};
