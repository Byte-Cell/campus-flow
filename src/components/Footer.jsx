import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Link to="/" className="footer-logo">
                    Campus Flow
                </Link>

                <nav className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/about">About</Link>
                </nav>

                <p className="footer-copy">
                    © 2026 Campus Flow. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;