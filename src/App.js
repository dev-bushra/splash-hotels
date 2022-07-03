import React from 'react';
import Home from './components/Home';
import HotelsDetails from './components/HotelsDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App bg-dark text-light">
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/details" element={<HotelsDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
