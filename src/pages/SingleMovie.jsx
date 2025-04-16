import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieReviewCard from "../components/MovieReviewCard";

export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/movies/${id}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.error('Error fetching movie:', error));
    }, [id]); // aggiunto id come dipendenza per sicurezza

    return (
        <>
            {/* Jumbotron */}
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">

                    <div className="row">
                        <div className="col-8">
                            <h1 className="display-5 fw-bold">{movie?.title}</h1>
                            <p className="col-md-8 fs-4">
                                {movie?.abstract}
                            </p>
                        </div>
                        <div className="col-4">
                            {movie.image ? (
                                <img

                                    src={`http://localhost:3000/image/${movie.image}`}
                                    alt={movie.title}
                                    className="img-fluid rounded-start"
                                    style={{ maxWidth: '100%', height: '200px' }}
                                />
                            ) : (
                                <img
                                    src="https://placehold.co/600x400"
                                    alt="Placeholder"
                                    className="img-fluid rounded-start"
                                    style={{ maxWidth: '100%', height: '200px' }}
                                />
                            )}

                        </div>
                    </div>

                </div>
            </div>

            <div className="container">

                <div className="add-review">
                    <h3 className="mb-3">Add your Review</h3>

                    <form action="post" method="post">

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="username"
                                aria-describedby="helpId"
                                placeholder="Anonymous"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="mb-3">
                                <label htmlFor="vote" className="form-label">Vote</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="vote"
                                    id="vote"
                                    aria-describedby="helpId"
                                    min={1}
                                    max={5}
                                    placeholder="Write your vote here..."
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="summary" className="form-label">Summary</label>
                            <input
                                type="text"
                                className="form-control"
                                name="summary"
                                id="summary"
                                aria-describedby="helpId"
                                placeholder="Write your summary here..."
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Review</label>
                            <textarea
                                name="review"
                                className="form-control"
                                id="review"
                                rows="3"
                                placeholder="Write your review here..."
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Review</button>
                    </form>
                </div>

                <hr />

                <h2>Reviews</h2>
                {movie?.reviews && movie.reviews.length > 0 ? (
                    <div>
                        {movie.reviews.map((review, index) => (
                            < MovieReviewCard key={index} movie={movie} review={review} />
                        ))}
                    </div>
                ) : (
                    <p>No reviews found</p>
                )}
            </div>
        </>
    );
}
