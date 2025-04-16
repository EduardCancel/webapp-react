export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <div className="d-flex flex-row align-items-center" style={{ gap: "1.5rem" }}>
                    <a className="nav-item nav-link active" href="/" aria-current="page">Home</a>
                    <a className="nav-item nav-link" href="/movies">Movies</a>
                </div>
            </div>
        </nav>
    );
}
