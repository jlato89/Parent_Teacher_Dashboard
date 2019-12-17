import React from 'react';
import Moment from 'react-moment';
import MailIcon from '../../assets/images/outline_mail_white_24.png';
import SearchIcon from '../../assets/images/outline_search_white_24.png';
import HomeIcon from '../../assets/images/outline_home_white_18dp.png';
import MenuBtn from '../../assets/images/outline_menu_white_24.png';
import LogoutIcon from '../../assets/images/outline_directions_run_white_18dp.png';
import ProfileImgDefault from '../../assets/images/outline_account_circle_white_48.png';
import styles from './Header.module.css';

const date = new Date();
const curHr = date.getHours();
let greetingMsg;
if (curHr < 12) { greetingMsg = 'Good Morning'; }
else if (curHr < 18) { greetingMsg = 'Good Afternoon'; }
else { greetingMsg = 'Good Evening'; }

const Header = props => {
  let headerContent;

  if (props.miniHeader) {
    headerContent = (
      <div className={styles.topHeader}>
        {/* Left Button */}
        <a href='/dashboard'>
          <img src={HomeIcon} alt='Home' height='30px' />
        </a>
        {/* Middle */}
        <span className={styles.topHeaderText}>
          {props.title ? props.title : 'PT Dashboard'}
        </span>
        {/* Right Button */}
        <img src={MenuBtn} alt='Menu' height='30px' />
      </div>
    )
  } else {
    headerContent = (
      <>
        <div className={styles.topHeader}>
          {/* Left Button */}
          <a href='/mail'>
            <img src={MailIcon} alt='Mail' height='30px' />
          </a>
          {/* Middle */}
          <img
            className={styles.profileImg}
            src={props.profileImg ? props.profileImg : ProfileImgDefault}
            alt='Profile Img'
          />
          {/* Right Button */}
          <a href='/search'>
            <img src={SearchIcon} alt='Search' height='30px' />
          </a>
        </div>
        <div className={styles.bottomHeaderText}>
          <p>
            <strong>Hi {props.name},</strong> {greetingMsg}
          </p>
          <p>
            <Moment format='ddd, MMM Do YYYY' date={date} />
            <img
              src={LogoutIcon}
              alt='Logout'
              height='30px'
              style={{ float: 'right' }}
              onClick={props.onClickLogout}
            />
          </p>
        </div>
      </>
    )
  }

  return (
    <div className={styles.container}>
      {headerContent}
    </div>
  );
};

export default Header;
