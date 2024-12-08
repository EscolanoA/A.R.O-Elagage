import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar.js';
import Home from './Component/Home.js';
import Services from './Component/Services.js';
import About from './Component/About.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
    </div>
  );
}

export default App;