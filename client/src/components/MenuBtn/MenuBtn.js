import React from 'react';
import styles from './MenuBtn.module.css';

function MenuBtn(props) {
  return (
    <div className={styles.item}>
      <a href={props.link}>{props.name}</a>
    </div>
  );
}

export default MenuBtn;
