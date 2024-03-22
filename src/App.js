
import "./App.css";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      <NavBar />
        <div className='home bg-cover bg-no-repeat bg-center'>
          <Home />
        </div>
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
