import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";
import Allwork from "./components/Allwork";
import Code from "./components/Code";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/Work" element={<Allwork />} />
          <Route path="/Code" element={<Code />} />
      </Routes> 

      <Footer />
    </div>
  );
}

function DefaultPage() {
  return (
    <div>
      <Hero />


    </div>
  );
}

export default App;
