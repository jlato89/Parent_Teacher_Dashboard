import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Moment from 'react-moment';

class Reports extends Component {
  constructor() {
    super();
    this.state = {
      studentArr: '',
      reportArr: ''
    };
  }
  componentDidMount() {
    axios
      .all([axios.get('/api/findStudents'), axios.get('/api/findReports')])
      .then(
        axios.spread((studentArr, reportArr) => {
          console.log('Students:', studentArr.data);
          console.log('Reports:', reportArr.data);
          this.setState({
            studentArr: studentArr.data,
            reportArr: reportArr.data
          });
        })
      )
      .catch(err => console.log(err.response));
  }

  render() {
    const { reportArr } = this.state;
    return (
      <div>
        <Header miniHeader title='Reports List' />
        {reportArr ? (
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Today I was</th>
                <th>Today I enjoyed</th>
                <th>Bathroom Breaks</th>
                <th>Naptime</th>
                <th>Today I ate</th>
                <th>Supplies I need</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {reportArr.map(report => (
                <tr key={report.id}>
                  <td>{report.studentName}</td>
                  <td>
                    <Moment date={report.date} format='MM/DD/YYYY' />
                  </td>
                  <td>{report.attitude}</td>
                  <td>{report.enjoyed}</td>
                  <td>{report.brBreaks}</td>
                  <td>{report.napTime}</td>
                  <td>{report.ate}</td>
                  <td>{report.suppliesNeeded}</td>
                  <td>{report.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default Reports;
