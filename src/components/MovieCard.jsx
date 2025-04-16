import { NavLink } from "react-router-dom";

export default function MovieCard({ movie }) {

    const { title, id, abstract, image, } = movie;

    return (
        <>
            <div className="col">
                <div className="card h-100 shadow-sm" style={{ maxWidth: '100%', fontSize: '0.9rem' }}>
                    <NavLink to={`/movies/${id}`} className="text-decoration-none text-dark">
                        <img
                            src={`http://localhost:3000/image/${image}`}
                            alt={movie.title}
                            className="card-img-top"
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                    </NavLink>
                    <div className="card-body p-2">
                        <h5 className="card-title mb-2">{title}</h5>
                        <p className="card-text">{abstract}</p>
                    </div>
                </div>
            </div>

        </>
    )
}