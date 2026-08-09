import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import resources from "./data/resources";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ResourcePage from "./components/ResourcePage";

function ResourceRoute() {
  const location = useLocation();

  const resource = resources.find(
    (resource) => resource.url === location.pathname
  );

  return resource ? <ResourcePage resource={resource} /> : <h1>Resource Not Found</h1>
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
          <Route path="/" element={
            <main>
              <section>
                <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </section>

              <section>
                <Resources searchTerm={searchTerm} />
              </section>
            </main>
          } />

          <Route path="*" element={<ResourceRoute />} />
          
      </Routes>

      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;