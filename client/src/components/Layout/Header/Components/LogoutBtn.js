import React from 'react';
import LogoutIcon from '../Images/outline_directions_run_white_18dp.png';


const LogoutBtn = ({ style, logoutHandler }) => {
  return (
    <>
      <img
        className={style}
        src={LogoutIcon}
        alt='Logout'
        onClick={logoutHandler}
      />
    </>
  )
}

export default LogoutBtn
