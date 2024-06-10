import { useState, useEffect } from "react";
function MoviesPage() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-blue-500 font-bold">Movie List</h1>
      <table className="border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300">Movie</th>
            <th className="border border-slate-300">Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => {
            return (
              <tr key={movie.id}>
                <td className="border border-slate-300 px-2 text-center">
                  {" "}
                  {movie.title}
                </td>
                <td className="border border-slate-300  px-2 text-center">
                  {movie.releaseYear}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default MoviesPage;