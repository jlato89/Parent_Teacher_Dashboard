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
    return (
      <div className='dashboardPage'>
        <Banner userType={this.state.userType} />
        {this.state.showBtns ? (
          <div>
            <div className='addReport'>Add Report</div>
            <div className='addEvent'>Add Event</div>
            <div className='viewKids'>View Kids</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dashboard;
