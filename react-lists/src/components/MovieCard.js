import React from "react";

function MovieCard(props) {
  const { movie, clickToDelete } = props;
  return (
    <div>
      <div key={movie._id} className="MovieCard">
        <h3>{movie.title}</h3>
        <p> Director: {movie.director}</p>
        <p> Rating: {movie.IMDBRating}</p>
        <button
          onClick={() => {
            clickToDelete(movie._id);
          }}
          className="btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
