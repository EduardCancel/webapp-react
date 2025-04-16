import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieReviewCard from "../components/MovieReviewCard";

export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        vote: '',
        text: '',
    });

    // Fetch movie details
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/movies/${id}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.error('Error fetching movie:', error));
    }, [id]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/api/v1/movies/${id}/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to submit review');
                }
                return response.json();
            })
            .then((data) => {
                alert('Review submitted successfully!');
                setMovie((prevMovie) => ({
                    ...prevMovie,
                    reviews: [...(prevMovie.reviews || []), { ...formData, id: data.reviewId }],
                }));
                setFormData({ name: '', vote: '', text: '' });
            })
            .catch((error) => console.error('Error submitting review:', error));
    };

    return (
        <>
            {/* Jumbotron */}
            <div className="p-5 mb-4 bg-light rounded-3">
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

            {/* Review Form */}
            <div className="container">
                <div className="add-review">
                    <h3 className="mb-3">Add your Review</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Anonymous"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="vote" className="form-label">Vote</label>
                            <input
                                type="number"
                                className="form-control"
                                name="vote"
                                id="vote"
                                value={formData.vote}
                                onChange={handleInputChange}
                                min={1}
                                max={5}
                                placeholder="Write your vote here..."
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Review</label>
                            <textarea
                                className="form-control"
                                name="text"
                                id="text"
                                value={formData.text}
                                onChange={handleInputChange}
                                rows="3"
                                placeholder="Write your review here..."
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Review</button>
                    </form>
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
                    <p>No reviews found</p>
                )}
            </div>
        </>
    );
}
