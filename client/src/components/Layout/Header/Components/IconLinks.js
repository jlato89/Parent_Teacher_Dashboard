import React from 'react';
import { Link } from 'react-router-dom';
import MailIcon from '../Images/outline_mail_white_24.png';
import SearchIcon from '../Images/outline_search_white_24.png';
import HomeIcon from '../Images/outline_home_white_18dp.png';
import MenuBtn from '../Images/outline_menu_white_24.png';

export const MailLink = ({ style }) => {
  return (
    <Link to='/Mail' className={style}>
      <img src={MailIcon} alt='Mail' height='30px' />
    </Link>
  )
}

export const SearchLink = ({ style }) => {
  return (
    <Link to='/Search' className={style}>
      <img src={SearchIcon} alt='Search' height='30px' />
    </Link>
  )
}

export const HomeLink = ({ style }) => {
  return (
    <Link to='/Dashboard' className={style}>
      <img src={HomeIcon} alt='Home' height='30px' />
    </Link>
  )
}

export const MenuLink = ({ style }) => {
  return (
    <Link to='/Menu' className={style}>
      <img src={MenuBtn} alt='Menu' height='30px' />
    </Link>
  )
}
