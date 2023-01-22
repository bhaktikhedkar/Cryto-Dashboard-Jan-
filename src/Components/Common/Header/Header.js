import React from 'react';
import Button from '../Button/Button';
import TemporaryDrawer from './Drawer';
import "./Header.css";
function Header() {
  return (
    <div className='header'>
      <h1>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
      <div className='links'>
        <a href='/'>
          <p className='link'>HOME</p>
          </a>
          <a href='/compare'>
          <p className='link'>COMPARE</p>
          </a>
          <a href='/watchlist'>
          <p className='link'>WATCHLIST</p>
          </a>
          <a href='/dashboard'>
          <Button text={"DASHBOARD"} />
          </a>
      </div>
      <div className='drawer-component'>
        <TemporaryDrawer />
      </div>
      </div>
  )
}

export default Header