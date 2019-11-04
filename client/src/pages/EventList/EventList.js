// TODO -> Get a modal setup for description and other info

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Moment from 'react-moment';

const Students = () => {
  const [data, setData] = useState({ eventArr: [] });

  useEffect(() => {
    axios('/api/findEvent').then(events => setData({ eventArr: events.data }));
  }, []);
  console.log(data.eventArr);

  return (
    <div>
      <Header miniHeader title='Event List' />
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th>Title</th>
            <th>Alert</th>
            <th>Event Date</th>
          </tr>
        </thead>
        <tbody>
          {data.eventArr.map(event => (
            <tr key={event.id}>
              <td>
                <strong>{event.title}</strong>
              </td>
              <td>{event.isAnnouncement ? 'YES' : 'NO'}</td>
              <td>
                <Moment date={event.eventDate} format='MM/DD/YYYY' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
