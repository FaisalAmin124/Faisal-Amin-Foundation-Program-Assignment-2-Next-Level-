function MovieCard({ movie, onDetails }) {

  return (
    <div className="movie-card">

      <img
        src={
          movie.show.image
            ? movie.show.image.medium
            : "https://via.placeholder.com/210x295?text=No+Image"
        }
        alt={movie.show.name}
      />

      <div className="movie-info">

        <h3>
          {movie.show.name}
        </h3>

        <p>
          ⭐ {movie.show.rating?.average || "N/A"}
        </p>

        <p>
          📅 {movie.show.premiered || "Unknown"}
        </p>

        <button
          className="details-btn"
          onClick={() => onDetails(movie.show)}
        >
          See Details
        </button>

      </div>

    </div>
  );
}

export default MovieCard;