import React from 'react';
import './GenreFilter.css';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div className="genre-filter">
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
