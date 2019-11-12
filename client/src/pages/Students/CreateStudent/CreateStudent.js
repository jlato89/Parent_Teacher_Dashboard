import React, { Component } from 'react';
import axios from 'axios';
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

  onSubmit = e => {
    e.preventDefault();
    const { mothersName, lastName, phone} = this.state

    const userName = mothersName.charAt(0) + lastName;
    console.log('userName combined: ', userName.toLowerCase());
    const password = lastName.slice(0,4) + phone.slice(-4);
    console.log('password created: ', password.toLowerCase());

    const parentObj = {
      firstName: this.state.mothersName,
      firstName2: this.state.fathersName,
      lastName: this.state.lastName,
      email: this.state.email,
      userName: userName.toLowerCase(),
      password: password.toLowerCase(),
      phone: this.state.phone,
      address: this.state.address
    };
    const studentObj = {
      firstName: this.state.childsName,
      lastName: this.state.lastName,
      birthdate: this.state.birthdate,
      gender: this.state.gender,
      allergies: this.state.allergies,
      medical: this.state.medical
    };
    console.log(parentObj);

    axios
      .post('/api/registerUser', parentObj)
      .then(parent => {
        console.log('[axios]parent: ', parent.data);
        studentObj.parentId = parent.data.userId;
        console.log('studentObj', studentObj);

        return axios.post("/api/createStudent", studentObj);
      })
      .then(student => {
        console.log('[axios]student: ', student.data);
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({
          errors: err.response.data
        });
      });
  };

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
          <label className={styles.formInputTitle}>Fathers Name</label>
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
          <label className={styles.formInputTitle}>Email</label>
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
          title='Add Student'
        >
          Submitted successfully.
        </MyModal>
      </div>
    );
  }
}

export default CreateStudent;
