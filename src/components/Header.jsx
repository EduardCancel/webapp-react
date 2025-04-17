import { NavLink } from "react-router-dom";
import { LogIn, UserPlus, Home } from "lucide-react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Header() {
    const { user, logout } = useContext(GlobalContext);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/">
                        🎥 Movie Reviews
                    </NavLink>
                    <ul className="navbar-nav ms-auto d-flex flex-row align-items-center">
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link d-flex align-items-center" to="/">
                                <Home className="icon home-icon me-1" />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        {user ? (
                            <>
                                <li className="nav-item mx-2">
                                    <span className="nav-link">Welcome, {user.username}</span>
                                </li>
                                <li className="nav-item mx-2">
                                    <button className="btn btn-outline-danger btn-sm" onClick={logout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link d-flex align-items-center" to="/login">
                                        <LogIn className="icon login-icon me-1" />
                                        <span>Login</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link d-flex align-items-center" to="/register">
                                        <UserPlus className="icon register-icon me-1" />
                                        <span>Register</span>
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
