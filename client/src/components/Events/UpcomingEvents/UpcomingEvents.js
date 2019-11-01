import React from 'react';
import Moment from 'react-moment';
import styles from './UpcomingEvents.module.css';

const UpcomingEvents = props => {
  const eventArr = props.events.filter(event => {
    return event.isAnnouncement === false;
  });

  let events = null;
  if (eventArr) {
    events = (
      <div className={styles.container}>
        <p className={styles.headerText}>Upcoming Events</p>
        {eventArr.map(event => (
          <div key={event.id}>
            <span className={styles.date}>
              <Moment format='ddd, MMM D' date={event.eventDate} />
              {' : '}
            </span>
            <span className={styles.title}>{event.title}</span>
          </div>
        ))}
      </div>
    );
  }
  return events;
};

export default UpcomingEvents;
