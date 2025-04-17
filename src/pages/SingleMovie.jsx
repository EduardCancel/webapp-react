import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieReviewCard from "../components/MovieReviewCard";
import MovieReviewForm from "../components/reviews/MovieReviewForm";

export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    // Fetch movie details
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/movies/${id}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.error('Error fetching movie details:', error));
    }, [id]);

    return (
        <>
            {/* Jumbotron */}
            <div className="p-5 mb-4" style={{ backgroundColor: 'white' }}>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="display-5 fw-bold">{movie?.title}</h1>
                            <p className="col-md-8 fs-4">{movie?.abstract}</p>
                        </div>
                        <div className="col-4">
                            {movie.image ? (
                                <img
                                    src={`http://localhost:3000/image/${movie.image}`}
                                    alt={movie.title}
                                    className="img-fluid"
                                    style={{ maxWidth: '100%', height: '200px' }}
                                />
                            ) : (
                                <img
                                    src="https://placehold.co/600x400"
                                    alt="Placeholder"
                                    className="img-fluid"
                                    style={{ maxWidth: '100%', height: '200px' }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Form */}
            <div className="container">
                <div className="add-review bg-light p-4 shadow-sm">
                    <h3 className="mb-3">Add your Review</h3>
                    <MovieReviewForm movieId={id} setMovie={setMovie} />
                </div>

                {/* Review List */}
                {movie?.reviews && movie.reviews.length > 0 ? (
                    <div className="mt-5">
                        <h2>Reviews</h2>
                        <hr />
                        {movie.reviews.map((review, index) => (
                            <MovieReviewCard key={index} movie={movie} review={review} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center mt-4">No reviews found</p>
                )}
            </div>
        </>
    );
}
