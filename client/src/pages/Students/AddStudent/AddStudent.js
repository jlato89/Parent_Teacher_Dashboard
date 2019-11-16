import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../components/Header/Header';

import FormContent from './FormContent/FormContent';

class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      errors: ''
    };
  }

  onSubmit = (formObj) => {
    const userName = formObj.parentObj.firstName.charAt(0) + formObj.parentObj.lastName;
    const password = formObj.parentObj.lastName.slice(0, 4) + formObj.parentObj.phone.slice(-4);
    formObj.parentObj.password = password.toLowerCase();
    formObj.parentObj.userName = userName.toLowerCase();
    formObj.studentObj.lastName = formObj.parentObj.lastName;

    console.log('[Container]', formObj);

    axios
      .post('/api/registerUser', formObj.parentObj)
      .then(parent => {
        console.log('[axios]parent:', parent.data);
        formObj.studentObj.parentId = parent.data.userId;

        return axios.post('/api/addStudent', formObj.studentObj);
      })
      .then(student => {
        console.log('[axios]student:', student.data);
        // setTimeout(() => {
        //   this.props.history.push('/dashboard')
        // }, 5000)
      })
      .catch(err => {
        console.log(err.response.data);
        // this.setState({
        //   errors: err.response.data
        // });
      });
  };

  render() {
    return (
      <div>
        <Header miniHeader={true} title='Add New User' />
        <FormContent onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default AddStudent;
