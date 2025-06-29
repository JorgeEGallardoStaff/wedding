"use client";

import HeartLine from "../components/HeartLine";
import WeekDisplay from "./WeekDisplay";

const WeddingDate = () => {
  const hearthWidth = 40;
  const hearthHeight = 32;

  return (
    <div className="bg-backsection">
      <div className="bg-backsection mx-auto w-full md:w-1/2 py-20">
        <HeartLine height={hearthHeight} width={hearthWidth} />
        <p className="text-7xl my-12 tracking-[0.1em] text-center " style={{ fontFamily: "vidaloka" }}>
          Octubre
        </p>
        <div className="mx-auto mb-20">
          <WeekDisplay
            startDate={new Date("2025-10-15T00:00:00-06:00")}
            selectedDate={new Date("2025-10-18T00:00:00-06:00")}
          />
        </div>
        <HeartLine height={hearthHeight} width={hearthWidth} />
      </div>

      <div className="w-full h-1/2 bg-backjumbo flex flex-col items-center justify-center text-white space-y-4 text-center">
        <p className="text-5xl my-12 tracking-[0.1em] text-center text-white" style={{ fontFamily: "vidaloka" }}>
          Sábado 18 de<br /> Octubre
        </p>
      </div>
    </div>
  );
};

export default WeddingDate;