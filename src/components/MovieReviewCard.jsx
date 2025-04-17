export default function MovieReviewCard({ review, movie }) {
    const { text, created_at, vote, name } = review;
    const { title } = movie;

    function printRating(vote) {
        const stars = [];
        const empty = [];

        for (let i = 0; i < vote; i++) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
        }
        for (let i = vote; i < 5; i++) {
            empty.push(<i key={i} className="bi bi-star text-secondary"></i>);
        }
        return [...stars, ...empty];
    }

    return (
        <>
            <div className="card mb-4 shadow-sm border-0">
                <div className="card-header bg-dark text-light d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{title}</h5>
                    <div className="vote">{printRating(vote)}</div>
                </div>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
                <div className="card-footer bg-light d-flex justify-content-between align-items-center">
                    <div className="author">
                        <i className="bi bi-person-circle"></i>
                        <span className="ms-2">{name}</span>
                    </div>
                    <small className="text-muted">{new Date(created_at).toLocaleDateString()}</small>
                </div>
            </div>
        </>
    );
}