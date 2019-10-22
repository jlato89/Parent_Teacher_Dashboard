import React from 'react';
import MailIcon from '../../assets/images/mail-24px.svg';
import MenuIcon from '../../assets/images/menu-24px.svg';

const styles = {
  header: {
    backgroundColor: '#98CEFF',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    fontSize: '1.4rem',
    fontWeight: 'bold'
  },
  menuBtn: {
    height: '30px'
  }
};

function Header(props) {
  return (
    <div style={styles.header}>
      <a href='/mail'>
        <img src={MailIcon} alt='Mail Icon' height='30px' />
      </a>
      <span>PT Dashboard</span>
      <img src={MenuIcon} alt='Menu Icon' height='30px' />
    </div>
  );
}

export default Header;
