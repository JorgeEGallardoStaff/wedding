"use client";

import React from "react";
import { format, addDays } from "date-fns";
import { es } from "date-fns/locale";

interface WeekDisplayProps {
  startDate: Date;
  selectedDate: Date;
}

const WeekDisplay: React.FC<WeekDisplayProps> = ({ startDate, selectedDate }) => {
  const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

  const handleAddToCalendar = () => {

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Boda%20Idaly%20%26%20Omar&dates=20251018T230000Z/20251019T000000Z&details=Acompáñanos%20en%20nuestro%20día%20especial.%20Misa%20Iglesia%20Catedral`;

    window.open(googleCalendarUrl, "_blank");
  };


  return (
    <div>
    <div className="flex space-x-6 text-lg font-semibold mx-auto text-center  justify-center tracking-[0.1em] overflow-hidden " style={{fontFamily:"Alice"}}>
      {days.map((day, index) => {
        const isSelected = format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
       return (
          <div key={index} className="flex flex-col items-center relative">
            <span className={`capitalize mb-4 text-2xl md:text-3xl ml-4 ${isSelected ? "text-backjumbo underline" : "text-gray-600"}`}>{format(day, "EEE", { locale: es })}</span>
            <span className={`text-3xl ml-4 ${isSelected ? "text-backjumbo underline" : "text-gray-600"}`}>
              {format(day, "dd")}
            </span>

          </div>
        );
      })}
      
    </div>
    <div className="flex flex-col items-center mt-2">
                <span className="text-2xl text-gray-600"></span>
                <button style={{fontFamily:"Alice"}} onClick={handleAddToCalendar} className="mt-6 px-4 py-1 bg-backjumbo text-white rounded-lg shadow-lg hover:bg-rose-900 text-lg">
                  Agenda la fecha
                </button>
              </div>
    </div>
  );
};

export default WeekDisplay;
