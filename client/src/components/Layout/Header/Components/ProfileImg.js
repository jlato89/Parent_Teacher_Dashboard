import React from 'react';
import NoImg from '../Images/outline_account_circle_white_48.png';

const ProfileImg = ({ image, style }) => {
  return (
    <>
      <img
        src={image ? image : NoImg}
        alt='Profile Img'
        className={style}
      />
    </>
  )
}

export default ProfileImg