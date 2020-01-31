import React, { useContext } from 'react';
import UserContext from '../../../UserContext';
import { MailLink, SearchLink, HomeLink } from './Components/IconLinks';
import Title from './Components/Title';
import ProfileImg from './Components/ProfileImg';
import WelcomeText from './Components/WelcomeText';
import LogoutBtn from './Components/LogoutBtn';
import styles from './Header.module.css';

const Header = (props) => {
  const { user, logoutUser } = useContext(UserContext);
  let headerContent;

  if (props.miniHeader) {
    headerContent = (
      <div className={styles.topHeader}>
        {/* Home Button */}
        <HomeLink style={styles.homeIcon} />
        {/* Title */}
        <Title style={styles.topHeaderText} title={props.title} />
        {/* Search Button */}
        <SearchLink style={styles.searchIcon} />
      </div>
    )
  } else {
    headerContent = (
      <>
        <div className={styles.topHeader}>
          {/* Left Button */}
          <MailLink style={styles.mailIcon} />
          {/* Profile Img */}
          <ProfileImg style={styles.profileImg} image={user.profileImage} />
          {/* Right Button */}
          <SearchLink style={styles.searchIcon} />
        </div>

        <div className={styles.bottomHeader}>
          {/* Welcome Message */}
          <WelcomeText style={styles.bottomHeader} name={user.firstName} />
          {/* Logout Button */}
          <LogoutBtn style={styles.logoutIcon} logoutHandler={logoutUser} />
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
