import { Link } from "react-router-dom";

function Categories({ resources }) {
    const categories = [
        ...new Set(resources.map((resource) => resource.category))
    ];

    return (
        <main className="categories-page">
            <h1>Browse Categories</h1>

            <p>
                Find campus resources organized by category.
            </p>

            <div className="category-grid">
                {categories.map((category) => {
                    const resourceCount = resources.filter(
                        (resource) => resource.category === category
                    ).length;

                    return (
                        <Link
                            key={category}
                            to={`/resources?category=${encodeURIComponent(category)}`}
                            className="category-card"
                        >
                            <h2>{category}</h2>

                            <p>
                                {resourceCount}{" "}
                                {resourceCount === 1 ? "resource" : "resources"}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}

export default Categories;