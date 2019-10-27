import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Header/Header';
import styles from './CreateReport.module.css';

class CreateReport extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      name: '',
      date: '',
      attitude: '',
      enjoyed: '',
      brBreaks: '',
      napTime: '',
      ate: '',
      suppliesNeeded: '',
      comments: ''
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const reportData = {
      name: this.state.name,
      date: this.state.date,
      attitude: this.state.attitude,
      enjoyed: this.state.enjoyed,
      brBreaks: this.state.brBreaks,
      napTime: this.state.napTime,
      ate: this.state.ate,
      suppliesNeeded: this.state.suppliesNeeded,
      comments: this.state.comments,
    };

    axios
      .post('/createReport', reportData)
      .then(response => {
        if (response.data.token) {
          const { token } = response.data;

          localStorage.setItem('ptDash', token);

          this.setState({
            errors: '',
            redirect: true
          });
        }
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
        <Header miniHeader={true} title='Create Report'/>
        <form onSubmit={this.onSubmit}>
          <label className={styles.formLabel}>Name</label>
          <input
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.onChange}
          />
          <label className={styles.formLabel}>Date</label>
          <input
            name='date'
            type='date'
            value={this.state.date}
            onChange={this.onChange}
          />
          <label className={styles.formLabel}>Today I was?</label>
          <input
            name='attitude'
            type='text'
            value={this.state.attitude}
            onChange={this.onChange}
          />
          <label className={styles.formLabel}>Today I enjoyed?</label>
          <input
            name='enjoyed'
            type='text'
            value={this.state.enjoyed}
            onChange={this.onChange}
          />
          <label className={styles.formLabel}>Bathroom Breaks</label>
          <input
            name='brBreaks'
            type='text'
            value={this.state.brBreaks}
            onChange={this.onChange}
          />
          <label className={styles.formLabel}>Nap Time</label>
          <input
            name='napTime'
            type='time'
            value={this.state.napTime}
            onChange={this.onChange}
          />
          <label className={styles.formLabel}>Today I Ate</label>
          <input
            name='ate'
            type='text'
            value={this.state.ate}
            onChange={this.onChange}
          />
          <label className={styles.formLabel}>Supplies Needed</label>
          <input
            name='suppliesNeeded'
            type='text'
            value={this.state.suppliesNeeded}
            onChange={this.onChange}
          />
          <label className={styles.formLabel}>Comments</label>
          <input
            name='comments'
            type='textarea'
            value={this.state.comments}
            onChange={this.onChange}
          />
          <br />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default CreateReport;
