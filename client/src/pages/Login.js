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
      email: this.state.email,
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
          style={{ height: 200, margin: '30px auto', display: 'block' }}
        />

        <form
          style={{ margin: '0 auto', width: 'fit-content' }}
          onSubmit={this.onSubmit}
          className='ui form'
        >
          <div className={`field ${errors.userName ? 'error' : ''}`}>
            <label>
              {errors.userName ? <p>{errors.userName}</p> : 'Username'}
            </label>
            <br />
            <input
              autoComplete='username'
              name='Username'
              type='Username'
              value={this.state.userName}
              onChange={this.onChange}
            />
          </div>

          <div
            style={{ margin: '6px 0' }}
            className={`field ${errors.password ? 'error' : ''}`}
          >
            <label>
              {errors.password ? <p>{errors.password}</p> : 'Password'}
            </label>
            <br />
            <input
              autoComplete='password'
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>

          <input
            style={{ float: 'right' }}
            type='submit'
            className='ui button grey fluid'
          />
        </form>
      </div>
    );
  }
}

export default Login;
