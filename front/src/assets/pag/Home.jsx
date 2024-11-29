import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Home.css';
import Banner from './../components/Banner/Banner';
import SearchBar from './../components/SearchBar/SearchBar';

function Home() {
  return (
      <>
    <NavBar></NavBar>
    <Banner></Banner>
    <SearchBar></SearchBar>

      </>
  
  );
}

export default Home;
