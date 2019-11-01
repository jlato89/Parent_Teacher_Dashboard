import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashButton.module.css';

const DashButton = props => {
  return props.buttons.map(link => (
    <Link className={styles.menuBtn} key={link.name} to={link.url}>
      <span className={styles.menuBtnTitle}>{link.name}</span>
    </Link>
  ));
};

export default DashButton;
