import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import StudentCard from './StudentCard/StudentCard';
const Students = () => {
  const [data, setData] = useState({ studentArr: [], parentArr: [] });

  useEffect(() => {
    axios
      .all([
        axios.get('/api/findStudents'),
        axios.get('/findUsers/parent')
      ])
      .then(
        axios.spread((students, parents) => {
          console.log('Students:', students.data);
          console.log('Parents:', parents.data);
          setData({
            studentArr: students.data,
            parentArr: parents.data
          });
        })
      )
      .catch(err => console.log(err.response));

  }, []);

  return (
    <div>
      <Layout miniHeader title='Student List' />
      <StudentCard studentArr={data.studentArr} parentArr={data.parentArr} />
    </div>
  );
};

export default Students;
