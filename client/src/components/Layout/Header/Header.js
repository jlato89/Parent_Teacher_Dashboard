import React, { useContext } from 'react';
import UserContext from '../../../UserContext';
import { MailLink, SearchLink, HomeLink, AbcBlocks } from './Components/IconLinks';
import Title from './Components/Title';
import ProfileImg from './Components/ProfileImg';
import Greeting from './Components/Greeting';
import LogoutBtn from './Components/LogoutBtn';
import styles from './Header.module.css';

const Header = ({ title, miniHeader }) => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <div className={styles.container}>
      {miniHeader ?
        <>
          {/* Home Button */}
          <HomeLink style={styles.leftBtn} />
          {/* Title */}
          <Title style={styles.title} title={title} />
          {/* Search Button */}
          <SearchLink style={styles.rightBtn} />
        </>
        :
        <>
          {/* Left Button */}
          <MailLink style={styles.leftBtn} />
          {/* Left Image */}
          <AbcBlocks style={styles.leftImg} />
          {/* Profile Img */}
          <ProfileImg style={styles.profileImg} image={user.profileImage} />
          {/* Right Button  */}
          <SearchLink style={styles.rightBtn} />
          {/* Right Image */}
          <AbcBlocks style={styles.rightImg} />
          {/* Greeting Message  */}
          <Greeting style={styles.greeting} name={user.firstName} />
          {/* Logout Button  */}
          <LogoutBtn style={styles.logoutIcon} logoutHandler={logoutUser} />
        </>
      }
    </div>
  );
};

export default Header;
