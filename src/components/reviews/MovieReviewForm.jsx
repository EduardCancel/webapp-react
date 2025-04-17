import React, { useState } from "react";

export default function MovieReviewForm({ movieId, setMovie }) {
    const [formData, setFormData] = useState({ name: '', vote: '', text: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/api/v1/movies/${movieId}/review`, {
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
                    required
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
                    placeholder="Rate from 1 to 5"
                    required
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
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Submit Review</button>
        </form>
    );
}