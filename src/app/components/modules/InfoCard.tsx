// components/InfoCard.tsx
import React from "react";
import Image from "next/image";

interface InfoCardProps {
  iconSrc: string;
  title: string;
  subtitle: string;
  time: string;
  link: string;
  gap: string;
}

const InfoCard = ({ iconSrc, title, subtitle, time, link, gap="0" }: InfoCardProps) => {
  return (
<div className="w-full max-w-sm md:w-[500px] md:max-w-none bg-white/80 rounded-2xl shadow-lg p-6 min-h-[550px] flex flex-col justify-between text-center backdrop-blur-sm">




      <div  style={{ fontFamily: "seasons" }} className="md:p-9 ">
        <div className="flex justify-center mb-9" >
          <Image src={iconSrc} alt={title} width={120} height={150} />
        </div>
        <h2 className={`text-4xl md:text-5xl mt-${gap}`} style={{marginTop: `${gap}px`}}  >{title}</h2>
        <p className="mt-3 text-lg md:text-lg">{subtitle}</p>
        <p className="mt-3 text-sm">{time}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block md:w-[318px] md:h-[57px] bg-[#891d35]  text-white px-6 py-2  md:pt-4 md:mx-auto rounded-full font-semibold tracking-wide hover:bg-[#6d182a] transition"
      >
        UBICACIÓN
      </a>
    </div>
  );
};

export default InfoCard;
