

import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar({ title }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> {}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/category/celular">Phones</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/category/tablet">Tablets</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/category/computer">Notebooks</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <CartWidget cartCount={4} />
                    </form>
                </div>
            </div>
        </nav>
    );
}