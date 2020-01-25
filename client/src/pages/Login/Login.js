import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Authenticate from '../../utils/Authenticate';
import LoginForm from './LoginForm/LoginForm';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      userName: '',
      password: '',
      errors: ''
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('ptDash');

    if (Authenticate(token)) {
      this.setState({ redirect: true });
      console.log('Already logged in, redirecting back to dashboard');
    }
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      userName: this.state.userName,
      password: this.state.password
    };

    axios
      .post('/api/loginUser', userData)
      .then(response => {
        if (response.data.token) {
          const { token } = response.data

          localStorage.setItem('ptDash', token)

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
    const { errors, redirect, userName, password } = this.state;

    if (redirect) {
      return <Redirect to='/dashboard' />
    }

    return (
      <LoginForm
        onChange={(e) => this.onChangeHandler(e)}
        onSubmit={(e) => this.onSubmitHandler(e)}
        errors={errors}
        userName={userName}
        password={password}
      />
    );
  }
}

export default Login;
