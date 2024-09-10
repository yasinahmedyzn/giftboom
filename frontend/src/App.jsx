import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
function App() {
  return (
    <div>
      <h1>hello world!!</h1>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
