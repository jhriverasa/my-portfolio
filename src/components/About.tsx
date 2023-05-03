const About = () => {
  return (
    <div
      className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center mt-2 mb-4">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate">Quién soy ?</div>
      </div>

      <p className="text-justify text-md text-slate-400">
        (Sin entrar en debates filosóficos) podría decir que soy una persona
        motivada, autodidacta, con alta resiliencia, que busca constantemente
        aprender nuevas cosas, creo sinceramente, que para sortear las
        dificultades que se van encontrando camino, se debe buscar un enfoque en
        soluciones y no en los problemas. Suelo dar el 200% de lo que soy por
        las cosas que realmente me interesan y poseo un nivel altísimo de
        perseverancia para alcanzar los objetivos propuestos.
      </p>
    </div>
  );
};

export default About;
