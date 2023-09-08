import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleMoreInfoClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative h-[36.25vw]">
      <video
        className="w-full h-[36.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src="./vid.mp4"
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          The Popes Exorcist
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
        Inspired by the actual files of Father Gabriele Amorth, Chief Exorcist of the Vatican (Academy Award®-winner Russell Crowe), The Pope’s Exorcist follows Amorth as he investigates a young boy’s terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
              bg-white
              text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
            onClick={handleMoreInfoClick}
          >
            More Info
          </button>
        </div>
      </div>
      {modalOpen && <Modal closeModal={handleModalClose} />}
    </div>
  );
};

export default Hero;