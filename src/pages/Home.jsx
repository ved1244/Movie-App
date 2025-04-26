import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_Date: "2020" },
    { id: 2, title: "Terminator", release_Date: "1999" },
    { id: 3, title: "Matrix", release_Date: "1998" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setsearchQuery = ("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          {" "}
          Search{" "}
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
