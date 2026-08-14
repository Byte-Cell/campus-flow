import { useEffect, useState } from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useLocation,
    useParams,
} from "react-router-dom";

import About from "./components/About";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ResourceDetails from "./components/ResourceDetails";
import ResourcesView from "./components/ResourcesView";

import "./App.css";

function ResourceRoute() {
    const { id } = useParams();

    const [resource, setResource] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`/api/resources/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Resource not found");
                }

                return response.json();
            })
            .then((data) => {
                setResource(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError("Resource not found.");
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <section className="resource-not-found">
                <h1>Loading Resource...</h1>
            </section>
        );
    }

    if (error) {
        return (
            <section className="resource-not-found">
                <h1>Resource Not Found</h1>

                <p>
                    We couldn't find the resource you're looking for.
                </p>

                <Link to="/resources">
                    Back to Resources
                </Link>
            </section>
        );
    }

    return <ResourceDetails resource={resource} />;
}

function SearchReset({ setSearchTerm }) {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setSearchTerm("");
        }
    }, [location.pathname, setSearchTerm]);

    return null;
}

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/resources")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch resources");
                }

                return response.json();
            })
            .then((data) => {
                setResources(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError("Unable to load resources.");
                setLoading(false);
            });
    }, []);

    return (
        <BrowserRouter>
            <SearchReset setSearchTerm={setSearchTerm} />

            <div className="app">
                <Navbar />

                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/resources"
                        element={
                            <ResourcesView
                                resources={resources}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                loading={loading}
                                error={error}
                            />
                        }
                    />

                    <Route
                        path="/resources/:id"
                        element={<ResourceRoute />}
                    />

                    <Route
                        path="/categories"
                        element={<Categories resources={resources} />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;