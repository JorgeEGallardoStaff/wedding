import Image from "next/image";
import CardGrid from "../components/modules/CardGrid";

const BackgroundSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-10">
      <Image
        src="/BnoviosLugar.jpg"
        alt="Fondo"
        fill
        className="object-cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-white/20" />
      
      {/* Contenedor para el contenido visible */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <CardGrid />
      </div>
    </div>
  );
};


export default BackgroundSection;
