import React from 'react';
import MailIcon from '../../assets/images/outline_mail_white_24.png';
import SearchIcon from '../../assets/images/outline_search_white_24.png';
import styles from './Header.module.css';
import ProfileImgDefault from '../../assets/images/outline_account_circle_white_48.png';

const today = new Date();
const curHr = today.getHours()
let greetingMsg;

if (curHr < 12) {
  greetingMsg = 'Good Morning';
} else if (curHr < 18) {
  greetingMsg = 'Good Afternoon';
} else {
  greetingMsg = 'Good Evening';
}

function Header(props) {
  let profileImg = props.profileImg
  if (!props.profileImg) {
    profileImg = ProfileImgDefault;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <img
          src={MailIcon}
          alt='Mail Icon'
          height='30px'
        />
        {/* <span className={styles.topHeaderText}>
          <a href='/dashboard'>
            PT Dashboard
          </a>
        </span> */}
        <img
          className={styles.profileImg}
          src={profileImg}
          alt='Profile Img'
        />
        <img
          src={SearchIcon}
          alt='Menu Icon'
          height='30px'
        />
      </div>
      <div className={styles.bottomHeaderText}>
        <p>
          <span className={styles.bold}>Hi {props.name},</span> {greetingMsg}
        </p>
        <p>Today, 14 Nov 2019</p>
      </div>
    </div>
  );
}

export default Header;
