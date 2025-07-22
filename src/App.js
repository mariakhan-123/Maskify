import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/AboutUs';
import Hero from './components/Hero';
import InputImage from './components/ImageInputPage'; // <-- Add this line
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/input-image" element={<InputImage />} /> 
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;
