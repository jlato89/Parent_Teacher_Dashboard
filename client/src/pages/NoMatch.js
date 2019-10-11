import React, { Component } from 'react';

class NoMatch extends Component {
   constructor() {
      super();
      this.state = {
         teacherName: ''
      };
   }

   render() {
      return (
         <>
            <h2>Error, No route found!</h2>
         </>
      );
   }
}

export default NoMatch;
