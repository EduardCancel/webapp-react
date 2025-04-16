import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">
                        🎥 Movie Reviews
                    </NavLink>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <i className="bi bi-house"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
