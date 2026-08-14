import { Link } from "react-router-dom";

function ResourceDetails({ resource }) {
    const audience = resource.audience || [];
    const content = resource.content || [];
    
    return (
        <article className="resource-page">
            <h1>{resource.title}</h1>

            <p className="category">{resource.category}</p>

            <p className="description">{resource.description}</p>

            <p className="audience">
                Audience: {resource.audience.join(" - ")}
            </p>

            <section className="resource-content">
                <h2>Information</h2>

                <ol>
                    {resource.content.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ol>
            </section>

            <Link to="/resources">
                Back to Resources
            </Link>
        </article>
    );
}

export default ResourceDetails;