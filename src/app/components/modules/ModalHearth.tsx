'use client';

import Image from 'next/image';
type ModalHearthProps = {
  showModal: boolean;
  children?: React.ReactNode;
  title?: string;
};

const ModalHearth = ({ showModal,  children, title }: ModalHearthProps) => {

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 bg-black md:w-full bg-opacity-80 flex items-center justify-center z-50"
          style={{ fontFamily: 'seasons' }}
        >
          <div className="bg-white rounded-2xl p-10 max-w-screen md:w-1/2 text-center shadow-lg opacity-90 max-h-screen  overflow-x-scroll  overflow-y-scroll">
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
