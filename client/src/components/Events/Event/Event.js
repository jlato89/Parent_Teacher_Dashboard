import React from 'react';
import Moment from 'react-moment';
import styles from './Event.module.css';

const Event = props => {
  let events = 'null';

  if (props.events) {
    events = props.events.map(event => (
      <div className={styles.container} key={event.id}>
        <span className={styles.date}>
          <Moment format='ddd, MMM D' date={event.eventDate} />
        </span>
        {' : '}
        <span className={styles.title}>
          {event.title}
        </span>
      </div>
    ));
  }
  return (
    <div>
      <p className={styles.headerText}>Upcoming Events</p>
      {events}
    </div>
  )
}

export default Event
