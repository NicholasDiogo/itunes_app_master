import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Search />
    </div>
  );
};

export default App;
