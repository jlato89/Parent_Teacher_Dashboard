import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      userType: 'Teacher',
      name: '',
      showBtns: true
    };
  }

  render() {
    let buttons = null; //? Set null initially
    if (this.state.showBtns) {
      //? If showBtns is true, update buttons with content
      buttons = (
        <div>
          <div className='addReport'>Add Report</div>
          <div className='addEvent'>Add Event</div>
          <div className='viewKids'>View Kids</div>
        </div>
      )
    }

    return (
      <div className='dashboardPage'>
        <Banner userType={this.state.userType} />
        {buttons}
      </div>
    );
  }
}

export default Dashboard;
