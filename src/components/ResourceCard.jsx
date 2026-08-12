import { Link } from "react-router-dom";

function ResourceCard({ resource }) {
    return (
        <article className="resource-card">
            <div className="resource-content">
                <h2>{resource.title}</h2>

                <p>{resource.description}</p>

                <p className="category">
                    {resource.category}
                </p>

                <p className="audience">
                    {resource.audience.join(" - ")}
                </p>
            </div>

            <Link to={resource.url}>
                View Resource
            </Link>
        </article>
    );
}

export default ResourceCard;