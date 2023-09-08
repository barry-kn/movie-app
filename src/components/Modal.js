import { XCircleIcon } from '@heroicons/react/24/outline';
import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';

const Modal = ({ closeModal }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/Scifi')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0   flex justify-center items-center bg-black bg-opacity-80">
      <div className=" bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row bg-white dark:bg-gray-900">

        <div className="w-full md:w-1/2">
          <div className="relative h-0 pb-[56.25%]">
            <ReactPlayer
              url={movies[0]?.url}
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              light={movies[0]?.poster}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
      
          <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">{movies[0]?.title}</h2>
          <p className=" mb-8 text-black dark:text-white">{movies[0]?.description}</p>
          <h2 className='text-black dark:text-white font-bold '>You may also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.slice(1, 10).map(movie => (
              <div
                key={movie.id}
                className="relative h-2 pb-[140%] rounded-lg overflow-hidden"
              >
                <ReactPlayer
                  url={movie.url}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  light={movie.poster}
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </div>
          
        </div>
        <button
           
           onClick={closeModal}
         >
           <XCircleIcon className="w-8 h-8 mb-10 text-black dark:text-white" />
         </button>
      </div>
    </div>
  );
};

export default Modal;
