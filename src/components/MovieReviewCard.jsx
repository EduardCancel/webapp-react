export default function MovieReviewCard({ review }) {
    const { title, text, created_at, vote } = review;

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

                <div className="card-footer">
                    {created_at}
                </div>
            </div>
        </>
    )
}