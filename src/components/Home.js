import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import SpecialOffers from './SpecialOffers';
import HotelsList from './HotelsList';

function Home() {
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

export default Home;
