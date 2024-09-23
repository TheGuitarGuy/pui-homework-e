// src/views/Home.js
import React from 'react';
import Navbar from './NavigationBar'; // Adjust based on your folder structure
import MainGrid from './MainGrid';
import './Home.css';  

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <MainGrid />

    </div>
  );
};

export default Home;
