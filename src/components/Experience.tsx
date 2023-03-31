import CustomTabs, { CustomTabsProps } from "./ui/CustomTabs";

const HelloBuildDescription = () => {
  return (
    <div>
      <div className="font-title tracking-wider">HELLOBUILD, LLC</div>
      <div className="font-body">ENE 2020 – ENE 2021</div>
      <div>
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
    <div>
      <div>SCOTIABANK</div>
      <div>ABR 2022 – DEC 2022</div>
      <div>
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
    label: "JAVASCRIPT FULL STACK DEVELOPER",
    component: <HelloBuildDescription />,
  },
  {
    label: "SALESFORCE TRAINEE/DEVELOPER",
    component: <ScotiabankDescription />,
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col text-teal-small" data-aos="fade-up">
      <h1>Experiencia</h1>
      <div>
        <CustomTabs tabList={custTabList} />
      </div>
    </div>
  );
};

export default Experience;
