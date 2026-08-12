import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                Campus Flow
            </Link>

            <ul className="navbar-links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/resources">Resources</NavLink>
                </li>

                <li>
                    <NavLink to="/categories">Categories</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;