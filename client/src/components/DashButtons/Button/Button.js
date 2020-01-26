import React from 'react';
import { Link } from 'react-router-dom';
import truck from '../images/truck.png';
import styles from './Button.module.css';

const Button = props => {
  return (
    props.buttons.map(btn => (
      <Link className={styles.btnContainer} key={btn.name} to={btn.url}>
        <img className={styles.btnImg} src={truck} alt={btn.name} />
        <div className={styles.btnOverlay}> {btn.name} </div>
      </Link>
    ))
  )
};

export default Button;
