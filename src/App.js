import "./App.css";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import TechnicalEvent from "./components/events/TechnicalEvent";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer"

function App() {
  return (
      <div className="relative z-0 bg-primary">
      <NavBar />
      <Home />
      <About />
        <TechnicalEvent />
      <Register />
      <Footer />
      </div>
  );
}

export default App;
