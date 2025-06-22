import InfoCard from "./InfoCard";

const CardGrid = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap  justify-center items-center gap-20 z-10">
      <InfoCard
        iconSrc="/icons/Templo.svg"
        title="Ceremonia"
        subtitle="Catedral Basílica Menor de la Inmaculada Concepción"
        time="5:00 P.M."
        link="https://maps.app.goo.gl/A2E1vzKgAcjYCr9r9"
        gap ="1"

      />
      <InfoCard
        iconSrc="/icons/Anillos2.svg"
        title="Boda Civil"
        subtitle="Jardín el palmar"
        time="7:45 P.M."
        link="https://maps.app.goo.gl/ErExK4r1Zj3YA5DP8"
        gap ="70"
      />

      <InfoCard
        iconSrc="/icons/Copas.svg"
        title="Recepción"
        subtitle="Salón del Jardín el palmar"
        time="9:00 P.M."
        link="https://maps.app.goo.gl/ErExK4r1Zj3YA5DP8"
        gap ="70"
      />
    </div>
  );
};

export default CardGrid;
