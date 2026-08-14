import ResourceDirectory from "./ResourceDirectory";

function ResourcesView({ resources, searchTerm, setSearchTerm, loading, error }) {
    return (
        <main>
            <section>
                <ResourceDirectory
                    resources={resources}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    loading={loading}
                    error={error}
                />
            </section>
        </main>
    );
}

export default ResourcesView;