import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
