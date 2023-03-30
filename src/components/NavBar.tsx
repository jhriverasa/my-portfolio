import Image from "next/image";
import NeonLink from "./primitives/NeonLink";

const NavBar = () => {
  return (
    <div className="animate__animated animate__bounce w-full h-16 flex flex-row justify-between items-center text-teal px-4">
      <div className="w-1/2">
        <div className="relative flex w-12 h-12">
          <Image alt="Logo" src="/logo.png" fill />
        </div>
      </div>
      <div className="w-1/2 flex justify-end font-body tracking-wider text-2xl">
        <NeonLink text="Sobre mi" href="#" />
        <NeonLink text="Experiencia" href="#" />
        <NeonLink text="Contacto" href="#" />
      </div>
    </div>
  );
};

export default NavBar;
