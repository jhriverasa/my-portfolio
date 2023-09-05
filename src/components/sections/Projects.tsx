import { LangConstantsType } from "@/constants"
import { selectedLanguageState } from "@/redux/slices/languageSlice"
import { useSelector } from "react-redux"

import ProjectBox from "@/components/shared/ProjectBox/ProjectBox"

const Projects = () => {
  const lang = useSelector(selectedLanguageState)
  return (
    <section id="projects" className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4">
      <div className="animate__fadeIn flex justify-center items-center mt-2 mb-4 ">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate ">{localCts.projects[lang]}</div>
      </div>

      <p className="animate__fadeIn text-justify text-md text-slate-400 " data-aos="fade-up" data-aos-duration="750">
        {localCts.intro[lang]}
      </p>
      <div className="flex flex-wrap justify-center" data-aos="fade-up" data-aos-duration="750">
        <ProjectBox
          title="Protrak"
          isExternalLink={false}
          url={"https://github.com/jhriverasa/PF"}
          techList={[
            { techName: "NodeJS" },
            { techName: "ReactJS" },
            { techName: "Tailwind" },
            { techName: "GraphQL" },
            { techName: "NextJS" },
            { techName: "MySQL" },
          ]}
        >
          {localCts.protrak[lang]}
        </ProjectBox>
        <ProjectBox
          title="Wakfu-farmscript"
          isExternalLink={false}
          url={"https://github.com/jhriverasa/wakfu-farmscript"}
          techList={[
            { techName: "Python" },
            { techName: "Opencv" },
            { techName: "Pynput" },
            { techName: "PySimpleGUI" },
          ]}
        >
          {localCts.wakfuFarmscript[lang]}
        </ProjectBox>
        <ProjectBox
          title="HappyPets-Backend"
          isExternalLink={false}
          url={"https://github.com/perceptronunal/PerceptronBackend"}
          techList={[
            { techName: "Ruby" },
            { techName: "Ruby-on-Rails" },
            { techName: "Authentication" },
            { techName: "Backend" },
            { techName: "PostgreSQL" },
          ]}
        >
          {localCts.happypetsBackend[lang]}
        </ProjectBox>

        <ProjectBox
          title="Axie Tools"
          isExternalLink={false}
          url={"https://github.com/TitansTeamUN/axie-front"}
          techList={[
            { techName: "Javascript" },
            { techName: "Typescript" },
            { techName: "ReactJS" },
            { techName: "Ionic" },
            { techName: "Mobile App" },
          ]}
        >
          {localCts.axieTools[lang]}
        </ProjectBox>

        <ProjectBox
          title="Google Kickstart Solutions"
          isExternalLink={false}
          url={"https://github.com/jhriverasa/google-kickstart-solutions"}
          techList={[
            { techName: "Python" },
            { techName: "Data Structures" },
            { techName: "Algorithms" },
            { techName: "Coding Competitions" },
          ]}
        >
          {localCts.googleKickstartSolutions[lang]}
        </ProjectBox>
      </div>
    </section>
  )
}

export default Projects

export const localCts: LangConstantsType = {
  projects: { es: "Proyectos", en: "Projects" },
  intro: {
    es: "Estos son algunos proyectos personales y particulares en los que he trabajado, debido a que para algunos el código es de uso privativo el link dirige al sitio en cuestión , o al repositorio en estados tempranos:",
    en: "These are some personal and particular projects in which I have worked, because for some the code is for private use, the link directs to the site in question, or to the repository in early stages:",
  },
  wakfuFarmscript: {
    es: "Un script de python con Interfaz gráfica que permite a los jugadores de Wakfu recolectar recursos del juego de manera semi automatizada, haciendo uso de detección de objetos en imágenes.",
    en: "A GUI python script that allows Wakfu players to collect game resources in a semi-automated manner, making use of image object detection.",
  },
  protrak: {
    es: "Protrak es una plataforma que permite gestionar proyectos, proveedores, clientes todo en un tablero unificado, junto con un feed que te permite dar seguimiento al proyecto de manera detallada.",
    en: "Protrak is a platform that allows you to manage projects, suppliers, customers, all in a unified dashboard, along with a feed that allows you to follow up on the project in detail.",
  },
  happypetsBackend: {
    es: "Esta es una solución de modelo de datos junto con diversos controladores que le dan vida al Backend para la HappyPets (una iniciativa de adopción mascotas) implementada en Ruby ON Rails, todo montado sobre una clásica arquitectura de 3 capas",
    en: "This is a data model solution along with various controllers that bring to life the Backend for HappyPets (a pet adoption initiative) implemented in Ruby ON Rails, all built on a classic 3-tier architecture.",
  },
  axieTools: {
    es: "Axie Tools fue un proyecto que buscaba dar soporte para la toma de decisiones dentro de la comunidad de inversores/jugadores de Axie Inifinity. Axie Infinity es un videojuego en línea basado blockchain en NFT, el juego funciona dando recompensas, que son los tokens del juego que utiliza la criptomoneda basada en Ethereum AXS",
    en: "Axie Tools was a project that sought to support decision-making within the Axie Infinity investor/player community. Axie Infinity is a blockchain-based online video game based on NFT, the game works by giving out rewards, which are the in-game tokens that use the Ethereum-based cryptocurrency AXS",
  },
  googleKickstartSolutions: {
    es: "Google Kickstart fue competencia de código global, organizada por Google, que buscaba evaluar el uso de estructuras de datos y algoritmos de manera eficiente. Este es un proyecto personal que busca integrar todas las soluciones a los distintos problemas propuestos en cada una de las competencias realizadas.",
    en: "Google Kickstart was a global code competition, organized by Google, that sought to test the efficient use of data structures and algorithms. This is a personal project that seeks to integrate all the solutions to the different problems proposed in each of the competencies carried out.",
  },
}
