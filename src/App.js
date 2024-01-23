
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Pages/Mainpage';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Packages from './components/Pages/Packages';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
