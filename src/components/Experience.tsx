import CustomTabs, { CustomTabsProps } from "./ui/CustomTabs";

const HelloBuildDescription = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="font-title tracking-widest text-lg text-aquamarine">
        HELLOBUILD, LLC
      </div>
      <div className="font-body italic font-bold ">Enero 2020 - Enero 2021</div>
      <div className="py-2 font-body_alt text-justify text-teal-small ">
        Durante mi estadía en la empresa Hellobuild que me brindo mi primera
        oportunidad laboral, hice parte del grupo de trabajo de Protrak (una
        aplicación para la gestión de proyectos), desarrollando funcionalidades
        preestablecidas y generando ideas que sirviesen como alternativas para
        la implementación de nuevas características. El stack tecnológico
        incluía ReactJS + NextJS en el Frontend y NodeJS+ Prisma-Nexus-GraphQL,
        y servicios como Stripe y Twillio para el Backend. En el proceso de
        desarrollo de esta aplicación fui reconocido múltiples veces por mi
        trabajo.
      </div>
    </div>
  );
};

const ScotiabankDescription = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="font-title tracking-widest text-lg text-aquamarine">
        SCOTIABANK
      </div>
      <div className="font-body italic font-bold">
        Abril 2022 – Diciembre 2022
      </div>
      <div className="py-2 font-body_alt text-justify">
        Debido a mi curiosidad por las distintas tecnologías apliqué para hacer
        parte de un entrenamiento en Salesforce, el programa de Salesforce
        Academy de Scotiabank que buscaba capacitar a desarrolladores en
        Salesforce para luego emplearlos en las distintas áreas que el banco
        requería. Durante los tres primeros meses tuve capacitación y terminé
        esta fase con honores teniendo las mejores puntuaciones del grupo en los
        exámenes de Certificación de Platform App Builder y Platform Developer
        I. Los meses restantes hice parte del equipo de Wealth Managemente del
        banco, un equipo de trabajo ubicado mayoritariamente en Canadá
      </div>
    </div>
  );
};

const custTabList = [
  {
    label: "JS FULLSTACK DEV",
    component: <HelloBuildDescription />,
  },
  {
    label: "SALESFORCE TRAINEE/DEV",
    component: <ScotiabankDescription />,
  },
];

const Experience = () => {
  return (
    <div
      className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center mt-2 mb-4">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate">Experiencia</div>
      </div>
      <div>
        <CustomTabs tabList={custTabList} />
      </div>
    </div>
  );
};

export default Experience;
