import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import ProfileNavbar from '../components/ProfileNavbar/ProfileNavbar';
import Orders from '../components/Orders/Orders';



const Home = () => {

  return (
    <div className="app">
      <ProfileNavbar />
      <Orders />


    </div>
  );
};

export default Home;
