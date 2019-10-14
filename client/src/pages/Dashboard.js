import React, { Component } from 'react';
import Banner from '../components/Banner/Banner'

class Dashboard extends Component {
   constructor() {
      super();
      this.state = {
         userType: 'Teacher',
         name: ''
      };
   }

   render() {
      return (
         <div className='dashboard'>
            <Banner userType={this.state.userType}/>
         </div>
      );
   }
}

export default Dashboard;
