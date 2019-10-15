import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      teacherName: ''
    };
  }

  render() {
    return (
      <div className='loginPage'>
        <h2>Login Page!</h2>
      </div>
    );
  }
}

export default Login;
