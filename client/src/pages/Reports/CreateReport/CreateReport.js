import React, { Component } from 'react';
import axios from 'axios';
import isEmpty from '../../../validation/is-empty';
import Header from '../../../components/Header/Header';
import MyModal from '../../../components/MyModal/MyModal';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Input from '../../../components/Input/Input';

import styles from './CreateReport.module.css';

class CreateReport extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      showModal: false,
      errors: '',
      name: '',
      date: '',
      attitude: '',
      enjoyed: '',
      brBreaks: '',
      napTime: '',
      ate: '',
      suppliesNeeded: '',
      comments: '',
      reportObj: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            label: 'Name',
            placeholder: 'John Smith'
          },
          value: ''
        },
        date: {
          elementType: 'input',
          elementConfig: {
            type: 'date',
            label: 'Date',
            placeholder: 'Date'
          },
          value: ''
        },
        attitude: {
          elementType: 'select',
          elementConfig: {
            label: 'Today I was Feeling',
            options: [
              { value: 'default', displayValue: 'Choose One' },
              { value: 'joyful', displayValue: 'Joyful' },
              { value: 'happy', displayValue: 'Happy' },
              { value: 'neutral', displayValue: 'Neutral' },
              { value: 'sad', displayValue: 'Sad' },
              { value: 'angry', displayValue: 'Angry' }
            ]
          },
          value: ''
        },
        enjoyed: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            label: 'Today I Enjoyed',
            placeholder: 'Today I Enjoyed'
          },
          value: ''
        },
        brBreaks: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            label: 'Bathroom Breaks',
            placeholder: 'Bathroom Breaks'
          },
          value: ''
        },
        napTime: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            label: 'Nap Time',
            placeholder: 'Nap Time'
          },
          value: ''
        },
        ate: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            label: 'Today I Ate',
            placeholder: 'Today I Ate'
          },
          value: ''
        },
        suppliesNeeded: {
          elementType: 'select',
          elementConfig: {
            label: 'Supplies Needed',
            options: [
              { value: 'none', displayValue: 'None' },
              { value: 'cloths', displayValue: 'Cloths' },
              { value: 'diapers', displayValue: 'Diapers' },
              { value: 'wipes', displayValue: 'Wipes' }
            ]
          },
          value: ''
        },
        comment: {
          elementType: 'textarea',
          elementConfig: {
            type: 'text',
            label: 'Comments',
            placeholder: 'Comments'
          },
          value: ''
        }
      }
    };
  }

  formChangedHandler = (e, inputIdentifier) => {
    const updatedReportObj = {
      ...this.state.reportObj
    };
    const updatedFormElement = {
      ...updatedReportObj[inputIdentifier]
    };
    updatedFormElement.value = e.target.value;
    updatedReportObj[inputIdentifier] = updatedFormElement;

    this.setState({
      errors: '',
      reportObj: updatedReportObj
    });
  };

  handleModalClose = () => this.setState({ showModal: false });
  handleModalShow = () => this.setState({ showModal: true });

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (isEmpty(this.state.name) || isEmpty(this.state.date)) {
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
    const { errors, reportObj } = this.state;
    const reportArr = [];
    for (let key in reportObj) {
      reportArr.push({
        id: key,
        config: reportObj[key]
      });
    }

    return (
      <div>
        <Header miniHeader={true} title='Create Report' />
        {/* Show error message if error state is true */}
        {errors && <Alert variant='danger'>{errors}</Alert>}

        {/* REPORT FORM */}
        <form onSubmit={this.onSubmit}>
          {reportArr.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={e => this.parentChangedHandler(e, formElement.id)}
            />
          ))}
          <Button
            type='submit'
            variant='primary'
            onClick={!errors ? null : this.handleModalShow}
          >
            Submit
          </Button>
        </form>

        {/* <form onSubmit={this.onSubmit}>
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
          <Button
            type='submit'
            variant='primary'
            onClick={!errors ? null : this.handleModalShow}
          >
            Submit
          </Button>
        </form> */}

        {/* MODAL CONTAINER */}
        <MyModal
          handleModalClose={this.handleModalClose}
          showModal={this.state.showModal}
          title='Create Report'
        >
          Report submitted successfully.
        </MyModal>
      </div>
    );
  }
}

export default CreateReport;
