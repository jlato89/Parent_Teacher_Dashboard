import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';

const styles = {
  loadingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};

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
    const loading = true //! Testing
    
    let dashboardContent;
    if (loading) {
      dashboardContent = (
        <div style={styles.loadingWrapper}>
          <h2 style={{marginTop: '5%'}}>Loading...</h2>
          <img
            alt='logo'
            style={{height: 150, width: 150}}
            src={require('../assets/images/happy-children-and-daycare.png')
          }
          />
        </div>
      );
    }

    return (
      <div className='dashboardPage'>
        <Banner userType={this.state.userType} />
        {dashboardContent}
      </div>
    );
  }
}

export default Dashboard;
