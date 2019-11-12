import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.png';

const Students = () => {
  const [data, setData] = useState({ studentArr: [] });

  useEffect(() => {
    axios('/api/findStudents').then(students =>
      setData({ studentArr: students.data })
    );
  }, []);
  console.log(data.studentArr);

  return (
    <div>
      <Header miniHeader title='Student List' />
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th></th>
            <th>First</th>
            <th>Last</th>
            <th>Gender</th>
            <th>Parent</th>
            <th>Allergies</th>
            <th>Medical</th>
          </tr>
        </thead>
        <tbody>
          {data.studentArr.map(student => (
            <tr key={student.id}>
              <td>
                <img
                  src={
                    student.profileImage
                      ? student.profileImage
                      : ProfilePlaceholder
                  }
                  alt=''
                  style={{ height: '30px' }}
                />
              </td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.gender}</td>
              <td>{student.parentId}</td>
              <td>{student.allergies}</td>
              <td>{student.medical}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
