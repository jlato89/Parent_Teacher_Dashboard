import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import setAuthToken from '../utils/setAuthToken'
import Moment from 'react-moment';
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
      redirect: false,
      loading: true,
      user: {},
      announcements: {
        id: 1,
        msg: 'School will be closed due to mold',
        date: 'Mon 24'
      },
      studentArr: []
    };
  }

  componentDidMount() {
    // Check for token in localStorage
    const token = localStorage.getItem('ptDash');
    if (token) {setAuthToken(token)}

    Axios
      .get('/findUser')
      .then(response => {
        console.log(response.data);
        this.setState({ user: response.data.user, loading: false })
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  handleLogout = () => {
    localStorage.removeItem('ptDash');
    this.setState({ redirect: true });
  };

  render() {
    const { redirect, user } = this.state;
    let dashboardContent;

    // Redirect to homepage if logout
    if (redirect) {
      return <Redirect to='/' />;
    }

    //? Content to render when app is loading
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
    } 
    //? Main content to render once app is finished loading
    else {
      dashboardContent = (
        <div>
          <h2>Welcome {user.fullName}!</h2>
          <p>
            <strong>Email: {user.email}</strong>
          </p>
          <p>
            <strong>
              Member since: <Moment date={user.createdAt} format='MM/DD/YYYY'/>
            </strong>
          </p>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    }


    return (
      <div className='dashboardPage'>
        <Header />
        <Announcements data={this.state.announcements} />
        {dashboardContent}
      </div>
    );
  }
}

export default Dashboard;
