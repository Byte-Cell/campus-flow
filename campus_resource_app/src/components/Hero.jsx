function Hero({ searchTerm, setSearchTerm }) {
    return (
        <section className="hero">
            <h1>Find Campus Resources Faster</h1>

            <p>
                Campus Flow helps students, faculty, staff,
                and visitors quickly find the information
                they need in one place.
            </p>
            <div className="search-container">
                <label htmlFor="site-search">Search: </label>
                <input type="search" id="site-search" name="q" placeholder="Search campus resources..." onChange={(e) => setSearchTerm(e.target.value)}/>
                <button>Search</button>
            </div>
        </section>
    )
}

export default Hero;