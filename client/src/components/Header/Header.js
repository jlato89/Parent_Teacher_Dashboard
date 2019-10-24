import React from 'react';
import MailIcon from '../../assets/images/mail-24px.svg';
import MenuIcon from '../../assets/images/menu-24px.svg';
import './Header-module.css';

function Header() {
  return (
    <div className='header'>
      <img className='mailIcon' src={MailIcon} alt='Mail Icon' height='30px' />
      <span className='headerText'>PT Dashboard</span>
      <img className='menuIcon' src={MenuIcon} alt='Menu Icon' height='30px' />
    </div>
  );
}

export default Header;
