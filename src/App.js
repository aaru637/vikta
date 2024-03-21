
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className={`home bg-cover`}>
            <NavBar />
            <Home />
          </div>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
