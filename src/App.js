import "./App.css";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer";
import TechnicalEvents from "./components/events/TechnicalEvents";
import NonTechnicalEvents from "./components/events/NonTechnicalEvents";
import SocialMedia from "./components/social-media/SocialMedia";
import Contact from "./components/contact/Contact";
import Location from "./components/location/Location";

function App() {
  return (
    <div className="relative z-0 bg-black">
      <NavBar />
      <Home />
      <About />
      <TechnicalEvents />
      <NonTechnicalEvents />
      <Register />
      <SocialMedia />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
