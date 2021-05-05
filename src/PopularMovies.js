import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { URL_DETAIL, API_KEY } from "./const";

const popularRequest = `${URL_DETAIL}popular/?api_key=${API_KEY}&language=en-US`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.article`
  max-width: 46%;
  flex: 0 0 50%;
`;

const Poster = styled.img`
  max-width: 46%;
  float: left;
  height: auto;
`;

const PopularMovies = () => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(popularRequest)
      .then((response) => response.json())
      .then((json) => setMovies(json.results))
      .then(setLoading(false));
  }, []);

  if (loading === true) return <p>Loading...</p>;

  return (
    <Wrapper>
      {movies.map((movie) => (
        <Link to={`movie/${movie.id}`}>
          <Card>
            <Poster
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={`Poster art for ${movie.original_title}`}
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </Card>
        </Link>
      ))}
    </Wrapper>
  );
};

export default PopularMovies;
