import React from "react";

const MovieInfo = ({movie}) => {
  return (
    <div className="card mt-4 p-4 shadow-sm">
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
        className="w-25 mb-4"
      />
      <div>
        <h3>{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
