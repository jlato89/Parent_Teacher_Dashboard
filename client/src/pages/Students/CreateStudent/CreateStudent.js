import React, { Component } from 'react';
// import axios from 'axios';
// import isEmpty from '../../../validation/is-empty';
import Header from '../../../components/Header/Header';
import MyModal from '../../../components/MyModal/MyModal';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import styles from './CreateStudent.module.css';

class CreateStudent extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      showModal: false,
      errors: '',
      mothersName: '',
      fathersName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      childsName: '',
      birthdate: '',
      gender: '',
      allergies: '',
      medical: ''
    };
  }

  handleModalClose = () => this.setState({ showModal: false });
  handleModalShow = () => this.setState({ showModal: true });

  onChange = e => {
    this.setState({
      errors: '',
      [e.target.name]: e.target.value
    });
  };

  // onSubmit = e => {
  //   e.preventDefault();

  //   if (isEmpty(this.state.name) || isEmpty(this.state.date)) {
  //     this.setState({
  //       errors: 'Please fill out missing fields!'
  //     });
  //   } else {
  //     this.setState({ errors: '' });
  //     console.log('No errors');
  //     const = {
  //       firstName: this.state.firstName,
  //       lastName: this.state.lastName,
  //       birthdate: this.state.birthdate,
  //       gender: this.state.gender,
  //       allergies: this.state.allergies,
  //       medical: this.state.medical,
  //     };

  //     axios
  //       .post('/api/CreateStudent', reportObj)
  //       .then(response => {
  //         console.log(response.data);
  //       })
  //       .catch(err => {
  //         console.log(err.response.data);
  //         this.setState({
  //           errors: err.response.data
  //         });
  //       });
  //   }
  // };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Header miniHeader={true} title='Create Report' />
        {/* Show error message if error state is true */}
        {errors && <Alert variant='danger'>{errors}</Alert>}

        {/* PARENT FORM */}
        <form onSubmit={this.onSubmit}>
          <label className={styles.formInputTitle}>Mothers Name*</label>
          <input
            name='mothersName'
            type='text'
            value={this.state.mothersName}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Fathers Name*</label>
          <input
            name='fathersName'
            type='text'
            value={this.state.fathersName}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Last Name*</label>
          <input
            name='lastName'
            type='text'
            value={this.state.lastName}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Email*</label>
          <input
            name='email'
            type='text'
            value={this.state.email}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Phone*</label>
          <input
            name='phone'
            type='text'
            value={this.state.phone}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Address*</label>
          <input
            name='address'
            type='text'
            value={this.state.address}
            onChange={this.onChange}
          />
        </form>

        {/* STUDENT FORM */}
        <hr />
        <form onSubmit={this.onSubmit}>
          <label className={styles.formInputTitle}>Childs Name*</label>
          <input
            name='childsName'
            type='text'
            value={this.state.childsName}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Birthdate*</label>
          <input
            name='birthdate'
            type='date'
            value={this.state.birthdate}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Gender*</label>
          <select
            name='gender'
            value={this.state.gender}
            onChange={this.onChange}
          >
            <option value='default'>Choose</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <label className={styles.formInputTitle}>Allergies*</label>
          <input
            name='allergies'
            type='text'
            value={this.state.allergies}
            onChange={this.onChange}
          />
          <label className={styles.formInputTitle}>Medical?</label>
          <input
            name='medical'
            type='text'
            value={this.state.medical}
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
        </form>

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

export default CreateStudent;
