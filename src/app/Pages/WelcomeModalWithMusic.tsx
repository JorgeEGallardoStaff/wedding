'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const WelcomeModalWithMusic = () => {
  const [showModal, setShowModal] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

 const [nombre, setNombre] = useState('Invitado/a');
const [pases, setPases] = useState('2');

useEffect(() => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    setNombre(decodeURIComponent(params.get('nombre') || 'Invitado/a'));
    setPases(params.get('pases') || '2');
  }
}, []);

  const handleAccept = () => {
    setShowModal(false);
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(err => {
        console.error("Error al reproducir música:", err);
      });
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 bg-black md:w-full bg-opacity-80 flex items-center justify-center z-50"
          style={{ fontFamily: 'seasons' }}
        >
          <div className="bg-white rounded-2xl  p-10 md:w-1/3 text-center shadow-lg opacity-90">
            <Image
              src="/anillos.svg"
              alt="anillos"
              width={200}
              height={200}
              className="mx-auto my-2"
            />
            <h2 className="text-4xl font-semibold mb-4 text-[#891d35]">
              Hacemos una cordial invitación a:
            </h2>
            <p className="my-5 text-gray-600 mb-6 text-2xl">
              {decodeURIComponent(nombre)}<br />
              ({pases} pase{pases === '1' ? '' : 's'})
            </p>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-2xl my-5 bg-[#891d35] text-white font-semibold rounded-full hover:bg-[#6d182a] transition"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}

      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default WelcomeModalWithMusic;
