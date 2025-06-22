import React from "react";
import NoFontText from "../components/utils/NoFontText";
import Image from "next/image";

const FullImageText = () => {
  return (
    <div
      className="w-full  flex flex-col tracking-[0.5em] "
      style={{ fontFamily: "seasons" }}
    >
    <div className="hidden md:block w-full h-[60vh] overflow-hidden relative">
    <Image
      src="/AnoviosTitulo.jpg"
      alt="Foto de los novios"
      className="absolute w-full h-auto"
      style={{ top: "-20px", left: "0", transform: "translateY(-15%)" }}
      width={1800}
      height={720}
      sizes="(min-width: 768px) 100vw, 0vw"
/>
    </div>

       

     <div className="block md:hidden w-full h-[50vh] overflow-hidden relative flex justify-center" >
  <Image
    src="/AnoviosTitulo.jpg"
    alt="Foto de los novios"
    className="absolute w-full h-full object-cover"
    style={{ top: "0px", left: "0" }}
    width={600}
    height={720}
  />
</div>

      <div className="w-full h-1/2 bg-backjumbo flex flex-col items-center justify-center text-white space-y-4 text-center p-9">
        <div className="flex items-center w-full justify-center space-x-2">
          <div className="w-1/6 border-t border-white"></div>
          <p className="text-sm md:text-md tracking-[0.1em] ">18.10.2025</p>
          <div className="w-1/6 border-t border-white"></div>
        </div>

        <p className="text-3xl md:text-5xl font-bold max-w-xs md:max-w-lg">
          IDALI{" "}
          <NoFontText text="&" classes="text-3xl md:text-5xl"></NoFontText> OMAR
        </p>

        <div className="w-1/6 border-t border-white"></div>

        <p className="text-4xl md:text-6xl font-bold">SAVE</p>
        <p className="text-3xl md:text-5xl font-bold">THE</p>
        <p className="text-4xl md:text-6xl font-bold">DATE</p>

        <div className="w-1/6 border-t border-white"></div>

        <p className="text-lg md:text-2xl tracking-[0.2em]">
          ¡ NOS CASAMOS{" "}
          <NoFontText text="!" classes="text-lg md:text-2xl"></NoFontText>
        </p>
      </div>
    </div>
  );
};
export default FullImageText;
