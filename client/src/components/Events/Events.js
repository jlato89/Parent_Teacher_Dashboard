import React from 'react';
import Event from './Event/Event';
import styles from './Events.module.css';

const Events = props => {
  return (
    <div className={styles.container}>
      <Event events={props.events} />
    </div>
  )
}

export default Events
