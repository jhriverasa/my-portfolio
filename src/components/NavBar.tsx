import Image from "next/image";
import NeonLink from "./ui/NeonLink";

const NavBar = () => {
  return (
    <div className="z-10  Right sticky top-0 shadow-sm shadow-indigo-400 bg-slate-900 text-teal flex  lg:justify-between lg:items-center px-[5vw]">
      <div className="w-1/4 flex  items-center">
        <div className="relative flex w-[3.1vw] h-[3.1vw] ">
          <Image
            className=" hover:cursor-pointer"
            alt="Logo"
            src="/logo.png"
            fill
          />
        </div>
      </div>
      <div className="animate__animated animate__rubberBand w-3/4 flex justify-end font-title tracking-wider lg:text-2xl md:text-lg">
        <NeonLink text="Sobre mi" href="#" />
        <NeonLink text="Experiencia" href="#" />
        <NeonLink text="Contacto" href="#" />
      </div>
    </div>
  );
};

export default NavBar;
