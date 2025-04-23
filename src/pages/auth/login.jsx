import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Login() {
    const { startLoading, stopLoading } = useContext(GlobalContext);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            startLoading();
            // Simulate API call
            setTimeout(() => {
                console.log("Form submitted:", formData);
                stopLoading();
            }, 1000);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.username) errors.username = "Username is required.";
        if (!formData.email) errors.email = "Email is required.";
        if (!formData.password) errors.password = "Password is required.";
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }
        return errors;
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                    />
                                    {errors.password && <small className="text-danger">{errors.password}</small>}
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                <div className="mt-3 text-center">
                                    Dont' have an account ? <Link to="/register" className="text-decoration-none">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
