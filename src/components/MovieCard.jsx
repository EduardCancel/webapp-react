import { NavLink } from "react-router-dom";

export default function MovieCard({ movie }) {
    const { title, id, abstract, image } = movie;

    return (
        <>
            <div className="col">
                <div className="card h-100 shadow-sm border-0">
                    <img
                        src={`http://localhost:3000/image/${image}`}
                        alt={title}
                        className="card-img-top"
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title text-truncate">{title}</h5>
                        <hr />
                        <p className="card-text text-muted">{abstract}</p>
                    </div>
                    <div className="card-footer bg-transparent border-0">
                        <NavLink to={`/movies/${id}`} className="btn btn-outline-dark btn-sm">
                            View Details
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}