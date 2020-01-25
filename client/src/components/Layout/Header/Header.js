import React, { useContext } from 'react';
import UserContext from '../../../UserContext';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import MailIcon from '../../../assets/images/outline_mail_white_24.png';
import SearchIcon from '../../../assets/images/outline_search_white_24.png';
import HomeIcon from '../../../assets/images/outline_home_white_18dp.png';
import MenuBtn from '../../../assets/images/outline_menu_white_24.png';
import LogoutIcon from '../../../assets/images/outline_directions_run_white_18dp.png';
import ProfileImgDefault from '../../../assets/images/outline_account_circle_white_48.png';
import styles from './Header.module.css';

const date = new Date();
const curHr = date.getHours();
let greetingMsg;
if (curHr < 12) { greetingMsg = 'Good Morning'; }
else if (curHr < 18) { greetingMsg = 'Good Afternoon'; }
else { greetingMsg = 'Good Evening'; }

const Header = (props) => {
  const { user, logoutUser } = useContext(UserContext);
  let headerContent;

  if (props.miniHeader) {
    headerContent = (
      <div className={styles.topHeader}>
        {/* Left Button */}
        <Link to='/dashboard'>
          <img src={HomeIcon} alt='Home' height='30px' />
        </Link>
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
          <Link to='/mail'>
            <img src={MailIcon} alt='Mail' height='30px' />
          </Link>
          {/* Middle */}
          <img
            className={styles.profileImg}
            src={user.profileImage ? user.profileImage : ProfileImgDefault}
            alt='Profile Img'
          />
          {/* Right Button */}
          <Link to='/search'>
            <img src={SearchIcon} alt='Search' height='30px' />
          </Link>
        </div>
        <div className={styles.bottomHeaderText}>
          <p>
            <strong>Hi {user.firstName},</strong> {greetingMsg}
          </p>
          <p>
            <Moment format='ddd, MMM Do YYYY' date={date} />
            <img
              className={styles.logoutIcon}
              src={LogoutIcon}
              alt='Logout'
              onClick={logoutUser}
            />
          </p>
        </div>
      </>
    )
  }

  return (
    <div className={styles.wrapper}>
      {headerContent}
    </div>
  );
};

export default Header;
