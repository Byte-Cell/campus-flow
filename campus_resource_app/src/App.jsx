import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Navbar />

      <main>
        <section>
          <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>

        <section>
          <Resources searchTerm={searchTerm} />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App;