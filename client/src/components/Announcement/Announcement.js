import React from 'react';
import Moment from 'react-moment';
import styles from './Announcement.module.css';

const Announcement = props => {
  let announcements;
  if (props.announcements.length > 0) {
    announcements = (
      <div className={styles.container}>
        {props.announcements.map(announcement => {
          return (
            <div key={announcement.id}>
              <span className={styles.date}>
                (<Moment date={announcement.eventDate} format='MM/DD' />)
              </span>
              <span className={styles.desc}>
                {announcement.description}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return <>{announcements}</>;
};

export default Announcement;
