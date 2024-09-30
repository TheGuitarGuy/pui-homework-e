import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import MainGrid from './components/MainGrid';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route to the landing page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Route to MainGrid */}
          <Route path="/main-grid" element={<MainGrid />} />
          
          {/* Route to Home */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
