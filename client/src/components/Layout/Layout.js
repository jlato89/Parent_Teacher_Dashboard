import React from 'react'
import Header from '../Header/Header';

const Layout = props => {
  return (
    <>
      <Header
        onClickLogout={props.onClickLogout}
        profileImg={props.profileImg}
        name={props.name}
      />
      <main>{props.children}</main>
    </>
  );
}

export default Layout
