'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

type ModalHearthProps = {
  showModal: boolean;
  children?: React.ReactNode;
  title?: string;
  setShowModal: (show: boolean) => void;
};

const ModalHearth = ({ showModal, children, title, setShowModal }: ModalHearthProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Cerrar modal al hacer clic fuera del contenido
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal, setShowModal]);

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          style={{ fontFamily: 'seasons' }}
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-2xl p-10 max-w-screen md:w-1/2 text-center shadow-lg opacity-90 max-h-screen overflow-x-scroll overflow-y-scroll"
          >
            {/* Botón X de cierre */}
            <button
              className="absolute top-4 right-4 text-6xl font-bold text-black hover:text-gray-800"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
            >
              &times;
            </button>

            <Image
              src="/Banner.svg"
              alt="Banner"
              width={400}
              height={200}
              className="mx-auto my-2"
            />
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 text-[#891d35]">
              {title}
            </h2>

            {children}

            <Image
              src="/Banner.svg"
              alt="Banner"
              width={400}
              height={400}
              className="mx-auto my-2"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalHearth;
