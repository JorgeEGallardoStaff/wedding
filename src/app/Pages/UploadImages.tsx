'use client';

import { useState } from 'react';
import UploadComponent from "../components/modules/UploadComponent";

const UploadImages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
    return (
        <div className="gift-table">
            <div className="w-full h-1/2 bg-backjumbo flex flex-col items-center justify-center text-white space-y-4 text-center p-9">
        <div className="flex items-center w-full justify-center space-x-2">
        </div>
            <p className="text-6xl tracking-[0em] text-center my-10" style={{fontFamily: "vidaloka"}}>
                Comparte tus fotos y videos<br></br> de la boda aquí
                <br></br>
                <br></br>
            </p>
               <p className="text-3xl tracking-[0.06em] text-center my-10" style={{fontFamily: "vidaloka"}}>
                No queremos perdernos ningún momento de este <br></br>hermoso día
            </p>
            <br></br>
                <br></br>
        <button
          onClick={openModal}
          className="mt-6 inline-block md:w-[318px] md:h-[57px] text-[#891d35]  bg-white px-6 py-2 md:mx-auto rounded-full font-semibold tracking-wide hover:bg-gray-200 transition"
        >
          SUBIR FOTOS
        </button>
      
            </div>
  {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-200 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center text-[#891d35]">Sube tus fotos</h2>
            <UploadComponent />
          </div>
        </div>
      )}
    </div>
  );

    };
export default UploadImages;
