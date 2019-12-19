import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashButton.module.css';

const DashButton = props => {
  return (
    props.buttons.map(btn => (
      <div className={styles.container} key={btn.name}>
        <Link className={styles.menuBtnTitle} to={btn.url}>
          {btn.name}
        </Link>
      </div>
    ))
  )
};

export default DashButton;
