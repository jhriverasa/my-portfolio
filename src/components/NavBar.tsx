import Image from "next/image";
import NeonLink from "./ui/NeonLink";

const NavBar = () => {
  return (
    <div className="z-10 animate__animated animate__bounce sticky top-0 shadow-sm shadow-indigo-400 bg-slate-900  flex flex-row justify-between items-center text-teal px-4">
      <div className="w-1/2">
        <div className="relative flex w-12 h-12">
          <Image className="opacity-30 hover:opacity-100 hover:cursor-pointer" alt="Logo" src="/logo.png" fill />
        </div>
      </div>
      <div className="w-1/2 flex justify-end font-title tracking-wider text-2xl">
        <NeonLink text="Sobre mi" href="#" />
        <NeonLink text="Experiencia" href="#" />
        <NeonLink text="Contacto" href="#" />
      </div>
    </div>
  );
};

export default NavBar;
