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
         <>
            <h2>Login Page!</h2>
         </>
      );
   }
}

export default Login;
