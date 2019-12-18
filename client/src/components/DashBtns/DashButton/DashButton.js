import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashButton.module.css';

const DashButton = props => {
  return (
    props.buttons.map(btn => (
      <div className={styles.container}>
        <Link className={styles.menuBtnTitle} key={btn.name} to={btn.url}>
          {btn.name}
        </Link>
      </div>
    ))
  )
};

export default DashButton;
