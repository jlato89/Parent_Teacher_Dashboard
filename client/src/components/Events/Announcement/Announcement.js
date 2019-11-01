import React from 'react';
import Moment from 'react-moment';
import styles from './Announcement.module.css';

const Announcement = props => {
  const announcements = props.events.filter(event => {
    return event.isAnnouncement === true;
  });

  return (
    announcements ?
      <div className={styles.container}>
        {announcements.map(announcement => {
          return (
            <div key={announcement.id}>
              <span className={styles.date}>
                (<Moment date={announcement.eventDate} format='MM/DD' />)
              </span>
              <span className={styles.desc}>{announcement.description}</span>
            </div>
          );
        })}
      </div>
    : null
  );
};

export default Announcement;
