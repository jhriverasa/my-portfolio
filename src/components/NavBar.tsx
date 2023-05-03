import Image from "next/image";
import NeonLink from "./ui/NeonLink";

const NavBar = () => {
  return (
    <div className="z-10  Right sticky top-0 shadow-sm shadow-indigo-400 bg-slate-900 text-teal flex  lg:justify-between lg:items-center px-[5vw]">
      <div className="w-1/4 flex  items-center">
        <div className="relative flex lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6">
          <Image
            className=" hover:cursor-pointer"
            alt="Logo"
            src="/img/logo.png"
            fill
          />
        </div>
      </div>

      <div className="animate__animated animate__rubberBand w-3/4 flex justify-end items-center font-title tracking-wider lg:text-2xl md:text-lg">
        <NeonLink text="Sobre mi" href="#" />
        <NeonLink text="Experiencia" href="#" />
        <div className="relative flex justify-center items-center lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6">
          <Image
            className=" hover:cursor-pointer"
            alt="Logo"
            src="/img/uk-flag.png"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
