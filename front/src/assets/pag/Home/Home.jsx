import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Home.css';
import Banner from './../components/Banner/Banner';
import SearchBar from './../components/SearchBar/SearchBar';
import About from './../components/About/About';
import Tips from './../components/Tips/Tips';

function Home() {
  return (
      <>
    <NavBar></NavBar>
    <Banner></Banner>
    <About></About>
    <Tips></Tips>
    <SearchBar></SearchBar>

      </>
  
  );
}

export default Home;
