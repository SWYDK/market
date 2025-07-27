import React, { useState } from 'react';
import profileimg from '../../assets/profile.png';
import './ProfileNavbar.css';

const ProfileNavbar = () => {


  return (
    <>
      <div className="profile-navbar">
        <img src={profileimg} alt="Photo" className='profileimg' />
        <h2 className='profiletext'>Влад (@xss1de)</h2>
      </div>
    <div className="link-wrapper">
      <div className="link">
        <a href=""><button className="link-btn">Поддержка</button></a>
        <a href=""><button className="link-btn">Условия доставки</button></a>
        <a href=""><button className="link-btn">Политика конфиденциальности</button></a>
      </div>
    </div>
    <h3 className='order-main-title'>Мои заказы:</h3>
  </>
  );
};




export default ProfileNavbar;
