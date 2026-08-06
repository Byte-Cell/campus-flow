import resources from "../data/resources";
import ResourceCard from "./ResourceCard";

function Resources({ searchTerm }) {

    function isMatch(resource) {
        if (resource.title.trim().toLowerCase().includes(searchTerm.toLowerCase().trim())) {
            return true
        } 
        else {
            return false
        }
    }

    const filteredResources = searchTerm == "" ? resources : resources.filter(isMatch);

    return (
        <section className="resources">
            <h2>Explore Campus Resources</h2>

            <div className="resource-grid">
                {filteredResources.map((item) => (
                    <ResourceCard key={item.id} resource={item}/>
                ))} 
            </div>
        </section>
    );
}

export default Resources;