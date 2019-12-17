import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../../../components/Layout/Layout';
import ReportForm from "./ReportForm/ReportForm";

class CreateReport extends Component {
  constructor() {
    super();
    this.state = {
      errors: ''
    };
  }

  onSubmit = (formObj) => {
    formObj.suppliesNeeded = formObj.suppliesNeeded.toString();
    formObj.enjoyed = formObj.enjoyed.toString();
    console.log('[Container]', formObj);

    axios
      .post('/api/createReport', formObj)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({
          errors: err.response.data
        });
      });
  };

  render() {
    return (
      <div>
        <Layout miniHeader title='Add Report' />
        <ReportForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default CreateReport;
