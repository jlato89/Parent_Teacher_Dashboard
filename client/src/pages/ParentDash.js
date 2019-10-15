import React, { Component } from 'react';

class ParentDash extends Component {
  constructor() {
    super();
    this.state = {
      teacherName: ''
    };
  }

  render() {
    return (
      <div className='parentDashPage'>
        <h2>Teacher Dashboard!</h2>
      </div>
    );
  }
}

export default ParentDash;
