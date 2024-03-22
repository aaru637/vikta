
import "./App.css";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className='relative z-0 bg-primary'>
      <NavBar />
      <Home id={''} />
      <About id={'aboutus'} />
    </div>
  );
}

export default App;
