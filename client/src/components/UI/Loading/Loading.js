import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Logo from '../Logo/Logo';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading