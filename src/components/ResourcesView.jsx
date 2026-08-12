import ResourceDirectory from "./ResourceDirectory";

function ResourcesView({ searchTerm, setSearchTerm }) {
    return (
        <main>
            <section>
                <ResourceDirectory
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            </section>
        </main>
    );
}

export default ResourcesView;