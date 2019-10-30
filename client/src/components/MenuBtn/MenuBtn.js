import React from 'react';
import styles from './MenuBtn.module.css';

const MenuBtn = props => {
  return (
    <div className={styles.container}>
      {props.dashLinks.map(link => (
        <a className={styles.menuBtn} key={link.name} href={link.url}>
          <span className={styles.menuBtnTitle}>{link.name}</span>
        </a>
      ))}
      ;
    </div>
  );
};

export default MenuBtn;
