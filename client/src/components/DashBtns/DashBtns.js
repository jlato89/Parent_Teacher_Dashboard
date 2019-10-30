import React from 'react';
import DashButton from './DashButton/DashButton';
import styles from './DashBtns.module.css';

const DashBtns = props => {
  return (
    <div className={styles.container}>
      <DashButton buttons={props.dashBtns} />
    </div>
  )
}

export default DashBtns
