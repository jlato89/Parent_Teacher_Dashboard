import React from 'react';
import Moment from 'react-moment';

const styles = {
  container: {
    backgroundColor: '#FFED4F',
    fontSize: '1rem',
    padding: '5px'
  },
  date: {
    fontWeight: 'bold'
  },
  desc: {
    float: 'right'
  }
};
const Announcement = props => {
  let announcements;

  if (props.announcements) {
    announcements = (
      <div style={styles.container}>
        {props.announcements.map(announcement => {
          return (
            <div key={announcement.id}>
              <span style={styles.date}>
                (<Moment date={announcement.eventDate} format='MM/DD' />)
              </span>
              <span style={styles.desc}>
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
