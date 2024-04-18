import { useState, useEffect } from "react";
import { MovieContainer } from "./styles";
import { fetchData, IMG_PATH } from "./fetchData";

interface MovieProps {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

const MovieData = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieProps[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchData();
      setMovies(data.results);
      setFilteredMovies(data.results);
      console.log(data.results);
    };
    getMovies();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearch(searchText);
    if (searchText === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  useEffect(() => {
    setMovies(movies);
  }, []);

  const handleVote = (vote: number) => {
    if (vote >= 6) {
      return "green";
    } else if (vote >= 5 && vote < 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <>
      <MovieContainer>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />
        </div>
        <div className="movie-wrapper">
          {filteredMovies.map((movie: any) => (
            <div key={movie.id} className="movie">
              <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
              <div className="content">
                <p className="title">{movie.title}</p>
                <p>
                  <span
                    className={`tag 
                ${handleVote(movie.vote_average)}
                `}
                  >
                    {movie.vote_average}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </MovieContainer>
    </>
  );
};

export default MovieData;
