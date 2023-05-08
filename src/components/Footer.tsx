import NextIcon from "./svg/NextIcon";
import ReactIcon from "./svg/ReactIcon";
import TailwindIcon from "./svg/TailwindIcon";
import TypescriptIcon from "./svg/TypescriptIcon";

const Footer = () => {
  return (
    <div className=" flex flex-col rounded-lg px-6 mt-16 mb-8">
      <div className=" flex flex-col items-center justify-center">
        <div className="flex text-transparent text-stroke-slate tracking-wider font-title text-xl mb-4">
          <div className="mr-1">{`Hecho con`}</div>
          <div className="stroke-slate-900 text-red-700 mr-1">{` ♥ `}</div>
          <div> y ...</div>
        </div>
        <div className="flex items-center">
          <div className="w-6 lg-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-2 cursor-pointer">
            <a
              target="_blank"
              href="https://react.dev/"
              rel="noopener noreferrer"
            >
              <ReactIcon />
            </a>
          </div>
          <div className="w-6 lg-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-2 cursor-pointer">
            <a
              target="_blank"
              href="https://nextjs.org/"
              rel="noopener noreferrer"
            >
              <NextIcon />
            </a>
          </div>
          <div className="w-6 lg-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-2 cursor-pointer">
            <a
              target="_blank"
              href="https://www.typescriptlang.org/"
              rel="noopener noreferrer"
            >
              <TypescriptIcon />
            </a>
          </div>
          <div className="w-6 lg-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-2 cursor-pointer ">
            <a
              target="_blank"
              href="https://tailwindcss.com/"
              rel="noopener noreferrer"
            >
              <TailwindIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
