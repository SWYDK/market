import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import Navbar from '../components/Navbar/Navbar';
import Tabs from '../components/Tabs/Tabs';
import Product from '../components/Product/Product';




const Home = () => {

  return (
    <div className="app">
      <Navbar />
      <Tabs />
      <Product />
      
    </div>
  );
};

export default Home;
