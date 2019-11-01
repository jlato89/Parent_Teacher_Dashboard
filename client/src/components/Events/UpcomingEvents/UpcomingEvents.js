import React from 'react';
import Moment from 'react-moment';
import styles from './UpcomingEvents.module.css';

const UpcomingEvents = props => {
  let events = null;
  const eventArr = props.events.filter(event => {
    const dateNow = new Date();
    const eventDate = new Date(event.eventDate);
    return dateNow <= eventDate && event.isAnnouncement === false;
  });

  if (eventArr.length !== 0) {
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
