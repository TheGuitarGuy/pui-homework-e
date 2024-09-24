// src/views/Home.js
import React from 'react';
import MainGrid from './MainGrid';
import NavigationBar from './NavigationBar';
// import './Home.css';  

const Home = () => {
  return (
    <div className="home">
      <NavigationBar />

      <MainGrid />

    </div>
  );
};

export default Home;
