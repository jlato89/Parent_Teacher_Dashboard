import React, { Component } from 'react';

const styles = {
  header: {
    fontSize: '2rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    fontWeight: '300'
  }
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      errors: {}
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

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h1 style={styles.header}>
          PT Dashboard <br />
        </h1>

        <img
          src={require('../assets/images/happy-children-and-daycare.png')}
          alt='paper plane logo'
          style={{ height: 250, margin: '30px auto', display: 'block' }}
        />

        <form
          style={{ margin: '0 auto', width: '60%' }}
          onSubmit={this.onSubmit}
          className='ui form'
        >
          <div className={`field ${errors.userName ? 'error' : ''}`}>
            <label>
              {errors.userName ? <p>{errors.userName}</p> : 'Username'}
            </label>
            <br />
            <input
              style={{ width: '100%', fontSize: '1.5rem' }}
              name='Username'
              type='Username'
              value={this.state.userName}
              onChange={this.onChange}
            />
          </div>

          <div
            style={{ margin: '7px 0' }}
            className={`field ${errors.password ? 'error' : ''}`}
          >
            <label>
              {errors.password ? <p>{errors.password}</p> : 'Password'}
            </label>
            <br />
            <input
              style={{ width: '100%', fontSize: '1.5rem' }}
              autoComplete='password'
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            {/* <input type='checkbox' name='rememberMe' />
            <label>Remember Me</label> */}
            <input style={{ float: 'right', fontSize: '1rem' }} type='submit' />
            <p style={{ fontSize: '.75rem' }}>
              <a href='/resetpsw'>Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
