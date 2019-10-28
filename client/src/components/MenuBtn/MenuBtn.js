import React from 'react';
import styles from './MenuBtn.module.css';

const MenuBtn = props => {
  let menuBtns = (
    <>
      <a href={props.link} className={styles.menuBtn}>
        <span className={styles.menuBtnTitle}>{props.name}</span>
      </a>
      <a href={props.link} className={styles.menuBtn}>
        <span className={styles.menuBtnTitle}>{props.name}</span>
      </a>
    </>
  );
  return <div className={styles.container}>{menuBtns}</div>;
};

export default MenuBtn;
