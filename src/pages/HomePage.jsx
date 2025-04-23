import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const { startLoading, stopLoading } = useContext(GlobalContext);

    useEffect(() => {
        startLoading();
        fetch('http://localhost:3000/api/v1/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error))
            .finally(() => stopLoading());
    }, [startLoading, stopLoading]);

    return (
        <>
            <div className="p-5 mb-4 bg-light text-dark shadow-sm">
                <div className="container">
                    <h1 className="display-5 fw-bold">Welcome to Movie Reviews</h1>
                    <p className="lead">
                        Discover reviews and ratings for your favorite movies. Share your thoughts and explore new films to watch!
                    </p>
                </div>
            </div>

            <div className="container">
                {movies.length > 0 ? (
                    <section className="movies">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                            {movies.map(movie => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <p className="text-center">No movies available.</p>
                )}
            </div>
        </>
    );
}
