import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {

  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch("https://api.tvmaze.com/shows")

      .then((response) => response.json())

      .then((data) => {

        setMovies(data);

        setLoading(false);

      })

      .catch((error) => {

        console.error(error);

        setLoading(false);

      });

  }, []);


  const filteredMovies = movies.filter((movie) =>
    movie.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
    <>
      <Navbar />

      <main className="movies-page">

        <div className="container">

          <h1>
            Explore Movies & Shows
          </h1>

          <input
            type="text"
            placeholder="🔍 Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />


          {loading ? (

            <p className="loading">
              Loading movies...
            </p>

          ) : (

            <div className="movie-grid">

              {filteredMovies.map((movie) => (

                <MovieCard
                  key={movie.id}
                  movie={{ show: movie }}
                  onDetails={setSelectedMovie}
                />

              ))}

            </div>

          )}

        </div>

      </main>


      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />


      <Footer />

    </>
  );
}

export default Movies;