import React from "react";
import { useParams } from "react-router-dom";
import { URL_DETAIL, API_KEY } from "./const";

const Movie = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = React.useState([]);

  const detailsRequest = `${URL_DETAIL}${movieId}?api_key=${API_KEY}&language=en-US`;

  React.useEffect(() => {
    fetch(detailsRequest)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
      });
  }, []);

  const imgStyles = {
    maxWidth: "300px",
  };

  return (
    <article className="movie">
      <h2>{movie.original_title}</h2>
      <h3>{movie.tagline}</h3>
      <img
        style={imgStyles}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`Poster art for ${movie.original_title}`}
      />
      <p>Released {movie.release_date}</p>
    </article>
  );
};

export default Movie;
