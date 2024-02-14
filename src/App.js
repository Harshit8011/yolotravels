
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Pages/Mainpage';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Packages from './components/Pages/Packages';
import Contact from './components/Pages/Contact';
import PackageGrid from './components/Pages/PackageGrid';
import PackageSilidebar from './components/Pages/PackageSilidebar';
import PackageDetails from './components/Pages/PackageDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packagegrid" element={<PackageGrid />} />
        <Route path="/packageslidebar" element={<PackageSilidebar />} />
        <Route path="/packagedetails" element={<PackageDetails />} />
        

        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
