import resources from "../data/resources";
import ResourceCard from "./ResourceCard";

function Resources({ searchTerm }) {
    function isMatch(resource) {
        if (
            resource.title
                .trim()
                .toLowerCase()
                .includes(searchTerm.toLowerCase().trim())
        ) {
            return true;
        } else {
            return false;
        }
    }

    const filteredResources =
        searchTerm == "" ? resources : resources.filter(isMatch);

    return (
        <section className="resources">
            <h2>Explore Campus Resources</h2>

            <div className="resource-grid">
                {searchTerm && filteredResources.length === 0 ? (
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
