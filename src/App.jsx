import { useEffect, useState } from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useLocation
} from "react-router-dom";

import About from "./components/About";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ResourceDetails from "./components/ResourceDetails";
import ResourcesView from "./components/ResourcesView";

import resources from "./data/resources";
import "./App.css";

function ResourceRoute() {
    const location = useLocation();

    const resource = resources.find(
        (resource) => resource.url === location.pathname
    );

    return resource ? (
        <ResourceDetails resource={resource} />
    ) : (
        <section className="resource-not-found">
            <h1>Resource Not Found</h1>

            <p>
                We couldn't find the resource you're looking for. It may have
                been moved or the link may be incorrect.
            </p>

            <Link to="/">
                Back to Resources
            </Link>
        </section>
    );
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
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                            />
                        }
                    />

                    <Route
                        path="/categories"
                        element={<Categories />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    <Route
                        path="*"
                        element={<ResourceRoute />}
                    />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;