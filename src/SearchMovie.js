import { useState } from "react";
import MovieInfo from "./MovieInfo";

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

  const url = `https://api.themoviedb.org/3/search/movie?api_key=5cd4e303c92c90ca4f46bc2f78dbc48d&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch(err) {
      console.log(err);
    }
    
  }

  return (
    <div className="mt-4">
      <form onSubmit={searchMovies}>
        <label className="form-label fw-normal text-white" htmlFor="query">
          Movie Title
        </label>
        <input
          className="form-control"
          name="query"
          type="text"
          value={query}
          placeholder="Enter movie title"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary col-12 mt-3 fw-bold" type="submit">
          Search
        </button>
      </form>
      
      <div>
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieInfo movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
