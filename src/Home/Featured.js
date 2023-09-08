import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Featured = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/QUANDEVV/deploy/Featured')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-5 mt-10 text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-5">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-black rounded-lg shadow-lg overflow-hidden">
            <ReactPlayer
              url={movie.url}
              className="w-full h-full object-cover object-center"
              controls
              light={movie.poster} // use the movie poster as a preview image
              width="100%"
              height="100%"
            />
            <div className="px-4 py-2">
              <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
              <p className="text-gray-700 text-base">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;




