import Image from "next/image";
import HeartLine from "../components/HeartLine";
import ImageTextCard from "../components/modules/ImageTextCard";

const WeddingRules = () => {
  const hearthWidth = 40;
  const hearthHeight = 32;
  return (
    <div className="bg-backsection">
      <div className="bg-backsection mx-auto w-full md:w-1/2 py-10">
        <HeartLine height={hearthHeight} width={hearthWidth}>
        </HeartLine>

        <p className="text-7xl my-12 tracking-[0.06em] text-center " style={{fontFamily: "vidaloka"}}> Código de Vestimenta</p>
        <p className="text-7xl tracking-[0.06em] text-center text-backjumbo" style={{fontFamily: "vidaloka"}}> Formal</p>

        {/* Two ImageTextCard. If display < show one below the another. If not show one nexto to the another one*/}
        <div>
            <div className="flex flex-col md:flex-row justify-center items-stretch space-y-2 md:space-x-4 md:space-y-0">
                <ImageTextCard
                    title="Hombre"
                    text="Traje completo"
                    imageUrl="novio.svg"
                />
                <ImageTextCard
                    title="Mujer"
                    text="Vestido largo"
                    imageUrl="novia.svg"
                />
            </div>
            
        </div>
       {/* Prohibido :<br> Two svg circles color red and white  */}
        <p className="text-7xl  my-7 tracking-[0.06em] text-center text-backjumbo" style={{fontFamily: "vidaloka", marginTop: "60px", marginBottom: "20px"}}> Prohibido:</p>

       <div className="flex flex-row justify-center items-center gap-4">
  <Image
    src="/circleWhite.svg"
    alt="Círculo blanco"
    width={150}
    height={150}
  />
  <Image
    src="/circleWine.svg"
    alt="Círculo vino"
    width={150}
    height={150}
  />
</div>
       
        <p className="text-4xl text-center text-gray-600 py-10">
                       Color Blanco & Vino
        </p>
        <HeartLine height={hearthHeight} width={hearthWidth}>
        </HeartLine>
      </div>
        
    </div>
  );
};

export default WeddingRules;
