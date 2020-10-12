import React from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import { Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
