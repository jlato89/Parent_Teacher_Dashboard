import React from 'react';
import MailIcon from '../../assets/images/mail-24px.svg';
import MenuIcon from '../../assets/images/menu-24px.svg';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <img
        className={styles.mailIcon}
        src={MailIcon}
        alt='Mail Icon'
        height='30px'
      />
      <span className={styles.headerText}>PT Dashboard</span>
      <img
        className={styles.menuIcon}
        src={MenuIcon}
        alt='Menu Icon'
        height='30px'
      />
    </div>
  );
}

export default Header;
