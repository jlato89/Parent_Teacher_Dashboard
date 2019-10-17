import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Announcements from '../components/Announcement/Announcement';

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
      isAuthed: false,
      loading: true,
      userProfile: {
        fullName: 'Josh Latour',
        isTeacher: true,
        isDirector: false
      },
      announcements: {
          id: 1,
          msg: 'School will be closed due to mold',
          date: 'Mon 24'
        },
      studentArr: [
        {
          id: 1,
          name: 'Student1 Name',
          age: 3,
          allergies: ['Peanuts', 'Milk', 'Red Dye']
        },
        {
          id: 2,
          name: 'Student2 Name',
          age: 4,
          allergies: ['Apples', 'Cheese', 'blue Dye']
        }
      ]
    };
  }

  render() {
    let dashboardContent;
    let userType = 'Parent';

    //? Check if app is still loading
    if (this.state.loading) {
      dashboardContent = (
        <div style={styles.loadingWrapper}>
          <h2 style={{ marginTop: '5%' }}>Loading...</h2>
          <img
            alt='logo'
            style={{ height: 150, width: 150 }}
            src={require('../assets/images/happy-children-and-daycare.png')}
          />
        </div>
      );
    } else {
      dashboardContent = (
        <div>
          <h2>Welcome {this.state.userProfile.fullName}!</h2>
        </div>
      );
    }

    //? Check for userType
    if (this.state.userProfile.isTeacher) {
      userType = 'Teacher';
    }
    if (this.state.userProfile.isDirector) {
      userType = 'Director';
    }

    return (
      <div className='dashboardPage'>
        <Header userType={userType} />
        <Announcements data={this.state.announcements} />
        {dashboardContent}
      </div>
    );
  }
}

export default Dashboard;
