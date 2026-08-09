import resources from "../data/resources";
import ResourceCard from "./ResourceCard";
import { useState } from "react";

function Resources({ searchTerm, setSearchTerm }) {
    const [selectedCategory, setSelectedCategory] = useState("all");

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
                person.toLowerCase().includes(normalizedSearchTerm))
           ) && 
            (selectedCategory === "all" || resource.category === selectedCategory)
        ) {
            return true;
        } else {
            return false;
        }
    }

    const filteredResources = resources.filter(isMatch);

    const categories = [...new Set(resources.map((resource) => resource.category))];
    categories.unshift("all");

    return (
        <section className="resources">
            <h2>Explore Campus Resources</h2>

            <div className="category-filter">
                {categories.map((category) => (
                    <button className={category === selectedCategory ? "active" : ""} key={category} onClick={() => setSelectedCategory(category)}>
                        {category === "all" ? "All" : category}
                    </button>
                ))}
            </div>

            {(searchTerm !== "" || selectedCategory !== "all") && (
                <button className="clear-filters" onClick={clearFilters}>
                    Clear Filters
                </button>
            )}

            <div className="resource-grid">
                {filteredResources.length === 0 ? (
                    <article className="no-results">
                        <h3>No results found</h3>
                        <p>
                            Try a different search term or browse the available
                            resources.
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

export default Resources;
