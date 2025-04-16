import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <>
            <div className="p-3 mb-3 bg-light rounded-3">
                <div className="container-fluid py-3">
                    <h1 className="h4 fw-bold">Movie Reviews</h1>
                    <p className="col-md-10 fs-6">
                        Welcome to the Movie Reviews App! Here, you can find reviews and ratings for your favorite movies. Explore our collection and discover new films to watch.
                        Whether you're a fan of action, drama, comedy, or any other genre, we have something for everyone. Join us in celebrating the world of cinema and share your thoughts on the movies you love!
                    </p>
                </div>
            </div>

            <div className="container">
                {movies.length > 0 ? (
                    <section className="movies">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {movies.map(movie => (
                                    < MovieCard key={movie.id} movie={movie} />
                                ))}
                            </div>
                        </div>
                    </section>
                ) : (
                    <p>No movies available.</p>
                )}
            </div>
        </>
    );
}
