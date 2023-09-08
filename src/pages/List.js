import React, { useEffect, useState } from 'react';

const List = () => {
  const [movies, setMovies] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const handleHover = index => {
    setHoverIndex(index);
  };

  const handleLeave = () => {
    setHoverIndex(-1);
  };

  const handleAddToList = index => {
    setSelectedMovies(prevSelectedMovies => [...prevSelectedMovies, index]);
  };

  const handleRemoveFromList = index => {
    setSelectedMovies(prevSelectedMovies => prevSelectedMovies.filter(movieIndex => movieIndex !== index));
  };

  const handleRemoveGreen = index => {
    setSelectedMovies(prevSelectedMovies => prevSelectedMovies.filter(movieIndex => movieIndex !== index));
  };

  return (
    <div className="container mx-auto my-5 h-[100vw]">
      <h2 className="text-3xl font-bold mb-5">Continue Watching For group 6</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`bg-white rounded-lg shadow-lg overflow-hidden ${index === hoverIndex ? 'scale-105 transition duration-300' : ''} ${selectedMovies.includes(index) ? 'bg-green-500' : ''}`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
          >
            <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover" />
            <div className="px-4 py-2">
              <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
              <p className="text-gray-700 text-base">{movie.description}</p>
              {selectedMovies.includes(index) ? (
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={() => handleRemoveFromList(index)}>Remove from My List</button>
              ) : (
                <>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={() => handleAddToList(index)}>Add to My List</button>
                  {selectedMovies.includes(index) && (
                    <button className="bg-red-500 text-white px-4 py-2 rounded mt-4 ml-4" onClick={() => handleRemoveGreen(index)}>Remove Green</button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
