import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const location = useLocation();
  const current = location.pathname;

  return (
    <div className="menu">
      <Link to="/">
        <button className="menu-icon">
          <div className={`icon-wrapper ${current === '/' ? 'active-icon' : ''}`}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.75 23.8333V13H16.25V23.8333M3.25 9.74996L13 2.16663L22.75 9.74996V21.6666C22.75 22.2413 22.5217 22.7924 22.1154 23.1987C21.7091 23.605 21.158 23.8333 20.5833 23.8333H5.41667C4.84203 23.8333 4.29093 23.605 3.8846 23.1987C3.47827 22.7924 3.25 22.2413 3.25 21.6666V9.74996Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </Link>

      <Link to="/cart">
        <button className="menu-icon">
          <div className={`icon-wrapper ${current === '/cart' ? 'active-icon' : ''}`}>
            <svg width="26" height="26" style={{ marginRight: '3px' }} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.08334 1.08337H5.41668L8.32001 15.5892C8.41907 16.088 8.69041 16.536 9.08652 16.8549C9.48262 17.1737 9.97827 17.3431 10.4867 17.3334H21.0167C21.5251 17.3431 22.0207 17.1737 22.4168 16.8549C22.8129 16.536 23.0843 16.088 23.1833 15.5892L24.9167 6.50004H6.50001M10.8333 22.75C10.8333 23.3483 10.3483 23.8334 9.75001 23.8334C9.1517 23.8334 8.66668 23.3483 8.66668 22.75C8.66668 22.1517 9.1517 21.6667 9.75001 21.6667C10.3483 21.6667 10.8333 22.1517 10.8333 22.75ZM22.75 22.75C22.75 23.3483 22.265 23.8334 21.6667 23.8334C21.0684 23.8334 20.5833 23.3483 20.5833 22.75C20.5833 22.1517 21.0684 21.6667 21.6667 21.6667C22.265 21.6667 22.75 22.1517 22.75 22.75Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </Link>

      <Link to="/profile">
        <button className="menu-icon">
          <div className={`icon-wrapper ${current === '/profile' ? 'active-icon' : ''}`}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25M20 8.75C20 11.5114 17.7614 13.75 15 13.75C12.2386 13.75 10 11.5114 10 8.75C10 5.98858 12.2386 3.75 15 3.75C17.7614 3.75 20 5.98858 20 8.75Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Menu;
