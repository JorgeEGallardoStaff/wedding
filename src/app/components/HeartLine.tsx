import { FC } from "react";

interface HeartLineProps {
  lengthH?: number;
  width: number;
  height: number;
}

const HeartLine: FC<HeartLineProps> = ({ lengthH = 0, width, height }) => {
  const hearts = Array.from({ length: 8 });
 if (lengthH) console.log("")
  return (
    <div className="relative w-full flex items-center overflow-hidden">
      <div className="absolute top-1/2 left-3 w-full border-b-4 border-gray-500"></div>
      
      <div className="flex w-full justify-between">
        {hearts.map((_, index) => (
          <div key={index} className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              width={width}
              height={height}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeartLine;
