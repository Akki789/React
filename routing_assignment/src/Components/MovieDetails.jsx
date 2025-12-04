import { useParams } from "react-router-dom";

const movies = [
  { id: "tt101", title: "Inception", year: 2010 },
  { id: "tt102", title: "Avatar", year: 2009 },
  { id: "tt103", title: "Interstellar", year: 2014 },
];

export default function MovieDetails() {
  const { movieId } = useParams();

  const movie = movies.find(m => m.id === movieId);

  if (!movie) {
    return <h2>No movie found.</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>ID: {movie.id}</p>
    </div>
  );
}
