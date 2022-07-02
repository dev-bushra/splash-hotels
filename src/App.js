import React from 'react';
import Home from './components/Home';
import HotelsDetails from './components/HotelsDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-dark text-light">
  <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<HotelsDetails />} />
      </Routes>
  </Router>
    </div>
  );
}

export default App;
