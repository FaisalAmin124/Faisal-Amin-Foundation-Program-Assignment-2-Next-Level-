function MovieModal({ movie, onClose }) {

  if (!movie) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={
            movie.image
              ? movie.image.original
              : "https://via.placeholder.com/500x700?text=No+Image"
          }
          alt={movie.name}
        />

        <div className="modal-content">

          <h2>
            {movie.name}
          </h2>

          <p>
            ⭐ Rating: {movie.rating?.average || "N/A"}
          </p>

          <p>
            📅 Release: {movie.premiered || "Unknown"}
          </p>

          <p>
            🎭 Genre:{" "}
            {movie.genres?.join(", ") || "N/A"}
          </p>

          <h3>
            Overview
          </h3>

          <div
            dangerouslySetInnerHTML={{
              __html:
                movie.summary || "No description available."
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default MovieModal;