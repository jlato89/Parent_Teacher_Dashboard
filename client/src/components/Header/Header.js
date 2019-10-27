import React from 'react';
import MailIcon from '../../assets/images/outline_mail_white_24.png';
import SearchIcon from '../../assets/images/outline_search_white_24.png';
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

function Header(props) {
  let miniHeader = false;
  let profileImg = props.profileImg;
  if (!props.profileImg) {
    profileImg = ProfileImgDefault;
  }
  if (props.miniHeader) {
    miniHeader = true;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <img src={MailIcon} alt='Mail Icon' height='30px' />
        {miniHeader && (
        <span className={styles.topHeaderText}>
          {props.title}
        </span>
        )}
        {!miniHeader && (
          <img
            className={styles.profileImg}
            src={profileImg}
            alt='Profile Img'
          />
        )}
        <img src={SearchIcon} alt='Menu Icon' height='30px' />
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
