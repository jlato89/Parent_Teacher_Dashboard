import React, { Component } from 'react';
import axios from 'axios';

const styles = {
  rootContainer: {
    margin: '0 auto',
    width: '70%'
  },
  header: {
    fontSize: '2rem',
    fontWeight: '300',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.1
  },
  logo: {
    height: 250,
    margin: '10px auto',
    display: 'block'
  },
  form: {
    width: '80%',
    margin: '0 auto'
  },
  formInputs: {
    width: '100%',
    fontSize: '1.5rem'
  },
  submitBtn: {
    float: 'right',
    fontSize: '1rem'
  },
  errors: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    width: 'fit-content',
    margin: '0 auto',
    padding: '5px 10px'
  }
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      errors: ''
    };
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
      .post('/loginUser', userData)
      .then(response => {
        this.setState({ errors: '' });
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
    const { errors } = this.state;

    return (
      <div style={styles.rootContainer}>
        <h1 style={styles.header}>PT Dashboard</h1>

        <img
          src={require('../assets/images/happy-children-and-daycare.png')}
          alt='paper plane logo'
          style={styles.logo}
        />

        {/* Show error message if error state is true */}
        {errors && <div style={styles.errors}>{errors}</div>}

        <form style={styles.form} onSubmit={this.onSubmit}>
          <div>
            <label>Username</label>
            <br />
            <input
              style={styles.formInputs}
              name='userName'
              type='Username'
              value={this.state.userName}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              style={styles.formInputs}
              autoComplete='password'
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <p>
            <input style={styles.submitBtn} type='submit' />
            <sub>
              <a href='/resetpsw'>Forgot password?</a>
            </sub>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
