import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import MyModal from '../../components/MyModal/MyModal';
import ReportModal from './ReportModal/ReportModal';
import Moment from 'react-moment';
import Loading from '../../components/Loading/Loading';

class Reports extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      modalData: '',
      reportArr: ''
    };
  }
  componentDidMount() {
    axios('/api/findReports')
      .then(reportArr => {
        console.log('Reports', reportArr.data);
        this.setState({ reportArr: reportArr.data });
      })
      .catch(err => console.log(err.response));
  }
  handleClose = () => this.setState({ modalShow: false });
  handleShow = (report) => this.setState({ modalShow: true, modalData: report })


  render() {
    const { reportArr, modalShow, modalData } = this.state;
    return (
      <div>
        <Header miniHeader title='Reports List' />
        {reportArr ? (
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {reportArr.map(report => (
                <tr key={report.id} onClick={() => this.handleShow(report)}>
                  <td>{report.studentName}</td>
                  <td>
                    <Moment date={report.date} format='MM/DD/YYYY' />
                  </td>
                  <td>{report.comments ? 'yes' : 'no'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : <Loading />}
        <MyModal
          title='Report Details'
          showModal={modalShow}
          handleModalClose={this.handleClose}
        >
          <ReportModal report={modalData} />
        </MyModal>
      </div>
    );
  }
}

export default Reports;
