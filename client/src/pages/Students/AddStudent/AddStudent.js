import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../../../components/Layout/Layout';
import FormContent from './StudentForm/StudentForm';


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

    console.log('[Container]', formObj);

    axios
      .post('/api/registerUser', formObj.parentObj)
      .then(parent => {
        console.log('[axios]parent:', parent.data);
        formObj.studentArr.parentId = parent.data.userId;
        formObj.studentArr.map(student => student.parentId = parent.data.userId); //! check if still working

        return axios.post('/api/addStudent', formObj.studentArr);
      })
      .then(student => {
        console.log('[axios]student:', student.data);
        // setTimeout(() => {
        //   this.props.history.push('/dashboard')
        // }, 5000)
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   errors: err.response.data
        // });
      });
  };

  render() {
    return (
      <div>
        <Layout miniHeader={true} title='Add New Student' />
        <FormContent onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default AddStudent;
