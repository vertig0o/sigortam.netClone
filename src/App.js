import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div className="App">
      <Header showDropdown={showDropdown} toggleDropdown={toggleDropdown} />
      <HomePage toggleDropdown={toggleDropdown} />
    </div>
  );
}

export default App;
