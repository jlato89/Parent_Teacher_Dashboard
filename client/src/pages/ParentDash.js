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
         <>
            <h2>Teacher Dashboard!</h2>
         </>
      );
   }
}

export default TeacherDash;
