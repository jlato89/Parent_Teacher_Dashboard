import React from 'react';
import MailIcon from '../../assets/images/mail-24px.svg';
import MenuIcon from '../../assets/images/menu-24px.svg';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  menuBtn: {
    textAlign: 'right'
  }
};

function Header(props) {
  return (
    <div style= {{
      backgroundColor: '#98CEFF',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '5px'
    }}>
      <a href='/mail'>
        <img src={MailIcon} alt='Mail Icon' height='30px' />
      </a>
      <span style={{
        fontSize: '1.4rem',
        fontWeight: 'bold'
      }}>
        {props.userType}'s Dashboard
      </span>
      <img src={MenuIcon} alt='Menu Icon' height='30px' />
    </div>
  );
}

export default Header;
