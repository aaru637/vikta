import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <>
      <div className={`home bg-cover`}>
      <NavBar />
      <Home />
      </div>
    </>
  );
}

export default App;
