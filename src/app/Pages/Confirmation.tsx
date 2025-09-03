import Image from "next/image";
import HeartLine from "../components/HeartLine";
const Confirmation = () => {
  const phoneNumber = "6181494486"; 
  const message = encodeURIComponent(
    "¡Hola! Quiero confirmar mi asistencia a la boda. 🎉"
  );

  return (
    <div className="py-10 max-w-full overflow-hidden">
      <HeartLine height={40} width={32}></HeartLine>
      <div className="bg-backsection flex items-center justify-center md:min-h-screen px-4">
        <div className="bg-backsection w-full md:w-2/3 py-10 text-center space-y-10">
          <p
            className="text-5xl md:text-7xl tracking-[0.06em] text-backjumbo"
            style={{ fontFamily: "vidaloka" }}
          >
            Confirmación
          </p>

          <p
            className="text-xl md:text-4xl tracking-[0.06em] text-gray-600"
            style={{ fontFamily: "vidaloka" }}
          >
            ¿Nos acompañas en este día tan especial?
          </p>
          <Image style={{marginRight:"auto", marginLeft:"auto", maxWidth:"50%"}} src="/Sobre.svg" alt="alt" width={400} height={400} />
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#891d35] text-white px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-[#6d182a] transition"
          >
            Confirmar asistencia
          </a>
        </div>
      </div>
      <div>
        <HeartLine height={40} width={32}></HeartLine>
      </div>
     
    </div>
  );
};

export default Confirmation;
