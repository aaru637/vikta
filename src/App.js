import "./App.css";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Events from "./components/events/Events";

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <NavBar />
      <Home />
      <About />
      <Events />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
