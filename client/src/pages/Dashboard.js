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
      userProfile: {
        fullName: 'Josh Latour',
        isTeacher: true,
        isDirector: false
      },
      isAuthed: false,
      loading: false
    };
  }

  render() {
    let dashboardContent;
    let userType = 'Parent';
    
    if (this.state.loading) {
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
    } else {
      dashboardContent = (
        <div>
          <h2>Welcome {this.state.userProfile.fullName}!</h2>
        </div>
      )
    }
    if (this.state.userProfile.isTeacher) {
      userType = 'Teacher';
    }
    if (this.state.userProfile.isDirector) {
      userType = 'Director';
    }

    return (
      <div className='dashboardPage'>
        <Banner userType={userType} />
        {dashboardContent}
      </div>
    );
  }
}

export default Dashboard;
