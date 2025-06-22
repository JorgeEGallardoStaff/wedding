import React from "react";
import NoFontText from "../utils/NoFontText";
import Countdown from "../Countdown";

const MainText = () => {
  return (
    <div
      style={{ fontFamily: "seasons" }}
    >
      <div className="w-full h-1/2 bg-backjumbo flex flex-col items-center justify-center text-white space-y-4 text-center p-9 ">
        <div className="flex items-center w-full justify-center space-x-2">
          <div className="w-1/6 border-t border-white"></div>
        </div>

        <p className="text-3xl md:text-5xl font-bold max-w-xs md:max-w-lg tracking-[0.2em] py-1">
          IDALI{" "}
          <NoFontText text="&" classes="text-4xl md:text-6xl"></NoFontText> OMAR
        </p>
        <div className="w-1/6 border-t border-white"></div>

    <Countdown />

        <p className="text-4xl md:text-5xl font-bold">¡Los Esperamos!</p>

    
      </div>
    </div>
  );
};
export default MainText;
