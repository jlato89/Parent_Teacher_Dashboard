import React from 'react';
import Event from './Event/Event';
import styles from './Events.module.css';

const Events = props => {
  //? Grab only events and leave announcements out
  const events = props.events.filter(event => {
    return event.isAnnouncement === false;
  });

  return (
    events ?
    <div className={styles.container}>
      <Event events={events} />
    </div>
    : null
  )
}

export default Events
