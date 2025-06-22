import InfoCard from "./InfoCard";

const CardGrid = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 z-10">
      <InfoCard
        iconSrc="/icons/Templo.svg"
        title="Ceremonia"
        subtitle="Catedral Basílica Menor de la Inmaculada Concepción"
        time="5:00 P.M."
        link="https://maps.app.goo.gl/A2E1vzKgAcjYCr9r9"
        gap ="1"

      />
      <InfoCard
        iconSrc="/icons/Copas.svg"
        title="Recepción"
        subtitle="Salón el palmar"
        time="7:30 P.M."
        link="https://maps.app.goo.gl/ErExK4r1Zj3YA5DP8"
        gap ="70"
      />
    </div>
  );
};

export default CardGrid;
