import "../CSS/MovieCard.css";

function MovieCard({ movie }) {
  function onFavClick() {
    alert("Clicked on Favorite");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="Fav-btn" onClick={onFavClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.release_Date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
