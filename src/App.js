import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Campaigns from "./Components/Campaigns";
function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div className="App">
      <Header showDropdown={showDropdown} toggleDropdown={toggleDropdown} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage toggleDropdown={toggleDropdown} />}
          />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
