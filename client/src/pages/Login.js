import React, { Component } from 'react';

const styles = {
  appHeader: {
    background:
      'linear-gradient(to right, rgba(146, 254, 157,0.4) 0%, rgba(0, 201, 255, 0.4) 100%)',
    height: 300,
    fontWeight: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontSize: '2.5rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    fontWeight: '300'
  },
  subHeader: {
    fontSize: '1.5rem'
  },
  cardWrapper: {
    position: 'absolute',
    left: '50%',
    marginLeft: '-175px',
    top: '35%',
    marginTop: '-100px',
    borderRadius: 10,
    backgroundColor: '#edf2f7',
    width: 375,
    padding: 50,
    maxWidth: '90%',
    boxShadow: '0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)'
    // transform: 'translateY(-250px)'
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
      <div style={{ position: 'relative' }}>
        <div style={styles.appHeader}></div>

        <div style={styles.cardWrapper}>
          <h1 style={styles.header}>
            The Dashboard <br />
            <span style={styles.subHeader}>Login</span>
          </h1>

          <img
            src={require('../assets/images/happy-children-and-daycare.png')}
            alt='paper plane logo'
            style={{ height: 200, margin: '30px auto', display: 'block' }}
          />

          <form onSubmit={this.onSubmit} className='ui form'>
            <div className={`field ${errors.email ? 'error' : ''}`}>
              <label>
                {errors.email ? <p>{errors.email}</p> : 'Email Address'}
              </label>
              <input
                placeholder='Email Address'
                name='email'
                type='email'
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>

            <div className={`field ${errors.password ? 'error' : ''}`}>
              <label>
                {errors.password ? <p>{errors.password}</p> : 'Password'}
              </label>
              <input
                autoComplete='password'
                placeholder='Password'
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            
            <input type='submit' className='ui button grey fluid' />
          </form>
          <div style={{ marginTop: 20, textAlign: 'center' }}></div>
        </div>
      </div>
    );
  }
}

export default Login;
