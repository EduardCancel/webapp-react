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
            <div className="card mb-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>{title}</h3>
                    <div className="vote">{printRating(vote)}</div>
                </div>

                <div className="card-body">
                    <p>{text}</p>
                </div>

                <div className="card-footer d-flex justify-content-between align-items-center">
                    <div className="author">
                        <i className="bi bi-person-circle"></i>
                        <span className="ms-2">{name}</span>
                    </div>
                    {created_at}
                </div>
            </div>
        </>
    )
}