import React, { Component } from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom';
import Authenticate from '../utils/Authenticate';
import styles from './Login.module.css';
import Logo from '../components/Logo/Logo';

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
      console.log('Already Authed, redirected back to dashboard');
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      userName: this.state.userName,
      password: this.state.password
    };

    axios
      .post('/api/loginUser', userData)
      .then(response => {
        if(response.data.token) {
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
    const { errors, redirect } = this.state;

    if (redirect) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <h1 className={styles.header}>PT Dashboard</h1>
          <center>
            <Logo size='250' />
          </center>

          {/* Show error message if error state is true */}
          {errors && <div className={styles.errors}>{errors}</div>}

          <form className={styles.form} onSubmit={this.onSubmit}>
            <div>
              <label>Username</label>
              <input
                className={styles.formInput}
                name='userName'
                type='Username'
                value={this.state.userName}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                className={styles.formInput}
                autoComplete='password'
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <p>
              <input className={styles.submitBtn} type='submit' />
              <sub>
                <a href='/resetpsw'>Forgot password?</a>
              </sub>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
