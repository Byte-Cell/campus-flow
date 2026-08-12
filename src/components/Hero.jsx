import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <p className="hero-label">Campus Flow</p>

            <h1>Find Campus Resources Faster</h1>

            <p className="hero-description">
                Campus Flow helps students, faculty, staff,
                and visitors quickly find the information
                they need in one place.
            </p>

            <Link to="/resources" className="hero-button">
                Explore Resources
            </Link>
        </section>
    );
}

export default Hero;