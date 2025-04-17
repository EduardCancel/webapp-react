import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="display-4">404</h1>
                <p className="lead">Page Not Found</p>
                <Link to="/" className="btn btn-primary">
                    Go to Home
                </Link>
            </div>
        </div>
    );
}