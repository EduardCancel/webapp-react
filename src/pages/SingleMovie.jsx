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
                            <img
                                src={`http://localhost:3000/image/${movie.image}`}
                                alt={movie.title}
                                className="img-fluid rounded-start"
                                style={{ maxWidth: '100%', height: '200px' }}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                {movie?.reviews && movie.reviews.length > 0 ? (
                    <div>
                        <h2>Reviews</h2>
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
