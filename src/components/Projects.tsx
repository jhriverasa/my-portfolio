import Project from "./project/Project";

const Projects = () => {
  return (
    <div
      className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4"
      data-aos="fade-up"
      data-aos-duration="750"
    >
      <div className="animate__fadeIn flex justify-center items-center mt-2 mb-4 ">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate ">
          Proyectos
        </div>
      </div>

      <p className="animate__fadeIn text-justify text-md text-slate-400 ">
        Estos son algunos proyectos personales y particulares en los que he
        trabajado, debido a que para algunos el código es de uso privativo el
        link dirige al sitio en cuestión , o serán repositorios en estados
        tempranos:
      </p>
      <div className="flex flex-wrap justify-center">
        <Project
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
          Un script de python con Interfaz gráfica que permite a los jugadores
          de Wakfu recolectar recursos del juego de manera semi automatizada,
          haciendo uso de detección de objetos en imágenes.
        </Project>
        <Project
          title="Protrak"
          isExternalLink
          url={"https://www.getprotrak.com/en/"}
          techList={[
            { techName: "NodeJS" },
            { techName: "ReactJS" },
            { techName: "Tailwind" },
            { techName: "GraphQL" },
            { techName: "NextJS" },
            { techName: "MySQL" },
          ]}
        >
          Protrak es una plataforma que permite gestionar proyectos,
          proveedores, clientes todo en un tablero unificado, junto con un feed
          que te permite dar seguimiento al proyecto de manera detallada.
        </Project>
        <Project
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
          Este es una solución de modelo de datos junto con diversos
          controladores que le dan vida al Backend para la HappyPets (una
          iniciativa de adopción mascotas) implementada en Ruby ON Rails, todo
          montado sobre una clásica arquitectura de 3 capas
        </Project>

        <Project
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
          Axie Tools fue un proyecto que buscaba dar soporte para la toma de
          decisiones dentro de la comunidad de inversores/jugadores de Axie
          Inifinity. Axie Infinity es videojuego en línea basado en la red de
          cadena de bloques en NFT desarrollado y distribuido por el estudio
          vietnamita​ Sky Mavis, el juego funciona dando recompensas, que son
          los tokens del juego que utiliza la criptomoneda basada en Ethereum
          AXS
        </Project>

        <Project
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
          Google Kickstart fue competencia de código global, organizada por
          Google, que buscaba evaluar el uso de estructuras de datos y
          algoritmos de manera eficiente. Este es un proyecto personal que busca
          integrar todas las soluciones a los distintos problemas propuestos en
          cada una de las competencias realizadas.
        </Project>
      </div>
    </div>
  );
};

export default Projects;
