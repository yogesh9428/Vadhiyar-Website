import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';       // Solar Page
import OilHero from './components/OilHero'; // Oil Page
import About from './components/About';     // <--- IMPORT THIS

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/oil" element={<OilHero />} />
          <Route path="/about" element={<About />} /> {/* <--- ADD THIS ROUTE */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;