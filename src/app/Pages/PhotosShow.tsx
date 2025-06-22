import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../components/modules/EmblaCarousel";

const PhotosShow = () => {
  const SLIDES = Array.from(Array(10).keys()).map(
    (index) => `/carousel/c${index + 1}.jpg`
  );
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <div className="bg-backsection">
      <div className="bg-backsection mx-auto w-full md:w-2/3 py-10">
        <div className="my-2">
        <p
          className="text-6xl tracking-[0.06em] text-center text-backjumbo"
          style={{ fontFamily: "vidaloka" }}
        >
          {" "}
          Momentos
        </p>
        <br />
        <p
          className="text-6xl tracking-[0.06em] text-center text-backjumbo"
          style={{ fontFamily: "vidaloka" }}
        >
          {" "}
          Inolvidables
        </p>
        </div>
         <div className="my-10">
        <p
          className="text-3xl tracking-[0.06em] text-center text-gray-600"
          style={{ fontFamily: "vidaloka" }}
        >
          {" "}
          Captando recuerdos que duran para siempre
        </p>
        </div>
         <EmblaCarousel  slides={SLIDES} options={OPTIONS} />

      </div>
    </div>
  );
};

export default PhotosShow;
