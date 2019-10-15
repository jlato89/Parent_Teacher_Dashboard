import React, { Component } from 'react';

class TeacherDash extends Component {
  constructor() {
    super();
    this.state = {
      teacherName: ''
    };
  }

  render() {
    return (
      <div class='teacherDashPage'>
        <h2>Teacher Dashboard!</h2>
      </div>
    );
  }
}

export default TeacherDash;
