
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
