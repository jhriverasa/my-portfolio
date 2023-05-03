const WhyMe = () => {
  return (
    <div
      className="flex flex-col text-teal-small border border-indigo-400 rounded-lg p-6 my-4"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center mt-2 mb-4">
        <div className="text-4xl font-title text-slate-900 text-stroke-slate">
          Por qué yo ?
        </div>
      </div>

      <div className="text-justify  text-slate-400 flex flex-col text-md">
        <div className="my-1">
          <span className="mr-2 font-body_alt italic underline font-bold text-aquamarine">
            Autodidacta:
          </span>
          <span>
            Todo lo que he aprendido, incluso estudiando en la universidad lo he
            hecho por mi mismo, me gusta investigar, leer, documentarme, y poner
            en práctica cada una de las cosas que aprendo.
          </span>
        </div>

        <div className="my-1">
          <span className="mr-2 font-body_alt italic font-bold text-aquamarine">
            Creativo:
          </span>
          <span>
            Siempre he sabido idear soluciones a los problemas que se me
            presentan tanto en la vida como en el trabajo.
          </span>
        </div>
        <div className="my-1">
          <span className="mr-2 font-body_alt italic font-bold text-aquamarine">
            Resolutivo:
          </span>
          <span>
            Me enfoco siempre en la solución y no en el problema en si.
          </span>
        </div>

        <div className="my-1">
          <span className="mr-2 font-body_alt italic font-bold text-aquamarine">
            Mediador:
          </span>
          <span>
            Soy una persona empática, suelo ponerme en la posición del otro e
            intentar enteder sus razones
          </span>
        </div>

        <div className="my-1">
          <span className="mr-2 font-body_alt italic font-bold text-aquamarine">
            Responsable:
          </span>
          <span>
            Me enfoco siempre en la solución y no en el problema en si.
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
