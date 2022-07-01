import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SpecialOffers from './components/SpecialOffers';
import HotelsList from './components/HotelsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark text-light">
      <Navbar />
      <Header />
      <SpecialOffers />
      <HotelsList />
      <Footer />
    </div>
  );
}

export default App;
