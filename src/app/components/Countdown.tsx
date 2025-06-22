'use client';

import { useEffect, useState } from 'react';

const Countdown = () => {
  const targetDate = new Date("2025-10-18T18:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
   <div className="text-white text-center">
  <div className="grid grid-cols-7 gap-6 justify-center text-4xl md:text-6xl font-bold">
    <div>{timeLeft.days}</div>
    <div>:</div>
    <div>{timeLeft.hours}</div>
    <div>:</div>
    <div>{timeLeft.minutes}</div>
    <div>:</div>
    <div>{timeLeft.seconds}</div>
  </div>
  <div className="grid grid-cols-7 gap-6 justify-center text-sm md:text-lg uppercase tracking-widest text-gray-200 mt-2">
    <div>Días</div>
    <div></div>
    <div>Horas</div>
    <div></div>
    <div>Min</div>
    <div></div>
    <div>Seg</div>
  </div>
</div>

  );
};

export default Countdown;
