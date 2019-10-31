import React, { Component } from 'react';
import axios from 'axios';
import isEmpty from '../../validation/is-empty';
import Header from '../../components/Header/Header';
import styles from './CreateReport.module.css';

class CreateReport extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      errors: '',
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

    if (
      isEmpty(this.state.name) ||
      isEmpty(this.state.date)
    ) {
      this.setState({
        errors: 'Please fill out missing fields!'
      });
    } else {
      this.setState({ errors: '' });
      const reportObj = {
        studentName: this.state.name,
        date: this.state.date,
        attitude: this.state.attitude,
        enjoyed: this.state.enjoyed,
        brBreaks: this.state.brBreaks,
        napTime: this.state.napTime,
        ate: this.state.ate,
        suppliesNeeded: this.state.suppliesNeeded,
        comments: this.state.comments
      };

      axios
        .post('/api/createReport', reportObj)
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err.response.data);
          this.setState({
            errors: err.response.data
          });
        });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Header miniHeader={true} title='Create Report' />
        {/* Show error message if error state is true */}
        {errors && <div className={styles.errors}>{errors}</div>}

        <form onSubmit={this.onSubmit}>
          <label className={styles.formInputTitle}>Name*</label>
          <input
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Date*</label>
          <input
            name='date'
            type='date'
            value={this.state.date}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Today I was?*</label>
          <label className={styles.radioBtn}>
            <input
              className={styles.hidden}
              type='radio'
              name='attitude'
              value='option1'
              onChange={this.onChange}
            />
            Angry
          </label>
          <label className={styles.radioBtn}>
            <input
              className={styles.hidden}
              type='radio'
              name='attitude'
              value='option2'
              onChange={this.onChange}
            />
            Sad
          </label>
          <label className={styles.radioBtn}>
            <input
              className={styles.hidden}
              type='radio'
              name='attitude'
              value='option3'
              onChange={this.onChange}
            />
            Neutral
          </label>
          <label className={styles.radioBtn}>
            <input
              className={styles.hidden}
              type='radio'
              name='attitude'
              value='option4'
              onChange={this.onChange}
            />
            Happy
          </label>
          <label className={styles.radioBtn}>
            <input
              className={styles.hidden}
              type='radio'
              name='attitude'
              value='option5'
              onChange={this.onChange}
            />
            Joyful
          </label>
          <label className={styles.formInputTitle}>Today I enjoyed?*</label>
          <input
            name='enjoyed'
            type='text'
            value={this.state.enjoyed}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Bathroom Breaks*</label>
          <input
            name='brBreaks'
            type='text'
            value={this.state.brBreaks}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Nap Time*</label>
          <input
            name='napTime'
            type='time'
            value={this.state.napTime}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Today I Ate*</label>
          <input
            name='ate'
            type='text'
            value={this.state.ate}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Supplies Needed</label>
          <input
            name='suppliesNeeded'
            type='text'
            value={this.state.suppliesNeeded}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Comments</label>
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
