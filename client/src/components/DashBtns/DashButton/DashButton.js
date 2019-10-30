import React from 'react';
import styles from './DashButton.module.css';

const DashButton = props => {
  return props.buttons.map(link => (
    <a className={styles.menuBtn} key={link.name} href={link.url}>
      <span className={styles.menuBtnTitle}>{link.name}</span>
    </a>
  ));
};

export default DashButton;
