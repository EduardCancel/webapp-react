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
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Movie App!</p>

            <h2>Movies</h2>

            {movies.length > 0 ? (
                <section className="movies">
                    <div className="container">

                        <div className=" row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                            {
                                movies.map(movie => (
                                    <div key={movie.id} className="col">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <img src={`http://localhost:3000/image/${movie.image}`} alt="" className="card-img-top" />
                                            <div className="card-body">
                                                <h3>{movie.title}</h3>
                                                <p>{movie.abstract}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            ) : (
                <p>No movies available.</p>
            )}
        </div>
    );
}
