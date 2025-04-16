import { useState, useEffect } from "react";

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
                                    <div key={movie.id} className="col">
                                        <div className="card h-100 shadow-sm" style={{ maxWidth: '100%', fontSize: '0.9rem' }}>
                                            <img
                                                src={`http://localhost:3000/image/${movie.image}`}
                                                alt={movie.title}
                                                className="card-img-top"
                                                style={{ height: '300px', objectFit: 'cover' }}
                                            />
                                            <div className="card-body p-2">
                                                <h5 className="card-title mb-2">{movie.title}</h5>
                                                <p className="card-text">{movie.abstract}</p>
                                            </div>
                                        </div>
                                    </div>
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
