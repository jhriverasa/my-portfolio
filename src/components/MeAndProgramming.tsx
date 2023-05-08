import { LangConstantsType } from "@/constants";
import { selectedLangState } from "../store/langSlice";
import { useSelector } from "react-redux";

const MeAndProgramming = () => {
  const lang = useSelector(selectedLangState);

  return (
    <div
      className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4"
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-delay="300"
    >
      <div className="flex justify-center items-center mt-2 mb-4">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate ">
          {localCts.meAndProgramming[lang]}
        </div>
      </div>

      <p className="text-justify">{localCts.paragraph1[lang]}</p>
      <div className="text-justify">{localCts.paragraph2[lang]}</div>
    </div>
  );
};

export default MeAndProgramming;

export const localCts: LangConstantsType = {
  meAndProgramming: { en: "Me and programming", es: "Yo y la Programación" },
  paragraph1: {
    es: "El mundo de la programación siem re me ha parecido interesante, la idea de automatizar cosas y hacer de los computadores no nuestros competidores sino nuestros mejores aliados a la hora de ayudarnos a mejorar nuestra calidad de vida, ya sea mejorando las interacciones sociales, ayudando a otros a superar dificultades o discapacidades, a divertirnos jugando videojuegos o viendo algún video interesante pero tambien en la ciencia, en la investigación y un sinfín de actividades de las cuales se puede sacar provecho de las capacidades de un computador",
    en: " The world of programming has always seemed interesting to me, the idea of ​​automating things and making computers not our competitors but our best allies when it comes to helping us improve our quality of life, whether it is improving social interactions, helping others to overcome difficulties or disabilities, having fun playing video games or watching an interesting video, but also in science, in research and a host of activities that can be take advantage of the capabilities of a computer",
  },
  paragraph2: {
    es: "Es por eso que la mitad de mi vida (15 años) la he dedicado a estudiar y a aprender tanto de manera autodidacta como dentro de una educación mas formal (Universidad), las herramientas que nos provee un computador.",
    en: "That is why half of my life (15 years) I have dedicated to studying andto learn both in a self-taught way and within a more formal (University), the tools that a computer provides us.",
  },
};
