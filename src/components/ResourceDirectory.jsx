import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ResourceCard from "./ResourceCard";

function ResourceDirectory({ resources, searchTerm, setSearchTerm, loading, error }) {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchParams] = useSearchParams();

    if (loading) {
        return (
            <section className="resources">
                <h2>Explore Campus Resources</h2>
                <p>Loading resources...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="resources">
                <h2>Explore Campus Resources</h2>
                <p>{error}</p>
            </section>
        );
    }
    
    useEffect(() => {
        const categoryFromUrl = searchParams.get("category");

        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [searchParams]);

    function clearFilters() {
        setSearchTerm("");
        setSelectedCategory("all");
    }

    function isMatch(resource) {
        const normalizedSearchTerm = searchTerm.trim().toLowerCase();

        if (
            (searchTerm === "" ||
                resource.title
                    .trim()
                    .toLowerCase()
                    .includes(normalizedSearchTerm) ||
                resource.description
                    .trim()
                    .toLowerCase()
                    .includes(normalizedSearchTerm) ||
                resource.category
                    .trim()
                    .toLowerCase()
                    .includes(normalizedSearchTerm) ||
                resource.audience.some((person) =>
                    person.toLowerCase().includes(normalizedSearchTerm)
                )) &&
            (selectedCategory === "all" ||
                resource.category === selectedCategory)
        ) {
            return true;
        } else {
            return false;
        }
    }

    const filteredResources = resources.filter(isMatch);

    const categories = [
        ...new Set(resources.map((resource) => resource.category))
    ];

    categories.unshift("all");

    return (
        <section className="resources">
            <h2>Explore Campus Resources</h2>

            <div className="search-container">
                <label className="visually-hidden" htmlFor="site-search">
                    Search campus resources
                </label>

                <input
                    type="search"
                    id="site-search"
                    name="q"
                    placeholder="Search campus resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="category-filter">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={
                            category === selectedCategory ? "active" : ""
                        }
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category === "all" ? "All" : category}
                    </button>
                ))}
            </div>

            {(searchTerm !== "" || selectedCategory !== "all") && (
                <button
                    className="clear-filters"
                    onClick={clearFilters}
                >
                    Clear Filters
                </button>
            )}

            <div className="resource-grid">
                {filteredResources.length === 0 ? (
                    <article className="no-results">
                        <h3>No results found</h3>

                        <p>
                            Try a different search term or browse the
                            available resources.
                        </p>
                    </article>
                ) : (
                    filteredResources.map((item) => (
                        <ResourceCard
                            key={item.id}
                            resource={item}
                        />
                    ))
                )}
            </div>
        </section>
    );
}

export default ResourceDirectory;