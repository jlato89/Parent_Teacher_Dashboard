import React from 'react'
import Header from './Header/Header';

const Layout = props => {
  return (
    <>
      <header>
        <Header {...props} />
      </header>
      <main>{props.children}</main>
    </>
  );
}

export default Layout
