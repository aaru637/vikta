
import "./App.css";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register"

function App() {
  return (
    <div className='relative z-0 bg-primary'>
      <NavBar />
      <Home id={''} />
      <About id={'aboutus'} />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
