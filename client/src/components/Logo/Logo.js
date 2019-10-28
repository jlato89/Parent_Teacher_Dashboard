import React from 'react'

const Logo = props => {
  return (
      <img
        width={props.size}
        className='logo'
        alt='logo'
        src={require('../../assets/images/happy-children-and-daycare.png')}
      />
  );
}

export default Logo
