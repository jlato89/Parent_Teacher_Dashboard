import React from 'react';
import MailIcon from '../../assets/images/outline_mail_white_24.png';
import SearchIcon from '../../assets/images/outline_search_white_24.png';
import HomeIcon from '../../assets/images/outline_home_white_18dp.png';
import ProfileImgDefault from '../../assets/images/outline_account_circle_white_48.png';
import styles from './Header.module.css';

const curHr = new Date().getHours();
let greetingMsg;
if (curHr < 12) {
  greetingMsg = 'Good Morning';
} else if (curHr < 18) {
  greetingMsg = 'Good Afternoon';
} else {
  greetingMsg = 'Good Evening';
}

const Header = props => {
  let profileImg = props.profileImg;
  let miniHeader;
  let leftBtn;
  let rightBtn;

  if (!props.profileImg) {
    profileImg = ProfileImgDefault;
  }
  //? Check if miniHeader is true
  if (props.miniHeader) {
    miniHeader = true;
    leftBtn = (
      <a href='/dashboard'>
        <img src={HomeIcon} alt='Home Icon' height='30px' />
      </a>
    );
    rightBtn = (
      <a href='/search'>
        <img src={SearchIcon} alt='Search Icon' height='30px' />
      </a>
    );
  } else {
    miniHeader = false;
    leftBtn = (
      <a href='/mail'>
        <img src={MailIcon} alt='Mail Icon' height='30px' />
      </a>
    );
    rightBtn = (
      <a href='/search'>
        <img src={SearchIcon} alt='Search Icon' height='30px' />
      </a>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        {leftBtn}
        {miniHeader && (
          <span className={styles.topHeaderText}>{props.title}</span>
        )}
        {!miniHeader && (
          <img
            className={styles.profileImg}
            src={profileImg}
            alt='Profile Img'
          />
        )}
        {rightBtn}
      </div>
      {!miniHeader && (
        <div className={styles.bottomHeaderText}>
          <p>
            <span className={styles.bold}>Hi {props.name},</span> {greetingMsg}
          </p>
          <p>Today, 14 Nov 2019</p>
        </div>
      )}
    </div>
  );
}

export default Header;
