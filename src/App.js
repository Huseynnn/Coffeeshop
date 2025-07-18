import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
