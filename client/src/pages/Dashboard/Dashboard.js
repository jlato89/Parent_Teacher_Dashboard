import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import Layout from '../../components/Layout/Layout';
import Announcements from '../../components/Announcement/Announcement';
import DashBtns from '../../components/DashBtns/DashBtns';
import Events from '../../components/Events/Events';

import Logo from '../../components/Logo/Logo';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      loading: true,
      user: {},
      eventArr: [],
      studentArr: [],
      reportArr: [],
      dashBtns: [
        {
          name: 'Create Report',
          url: '/createReport'
        },
        {
          name: 'Create Incident',
          url: '/createIncident'
        },
        {
          name: 'Events',
          url: '/events'
        },
        {
          name: 'Students',
          url: '/students'
        },
        {
          name: 'Reports & Incidents',
          url: '/reports'
        },
        {
          name: 'Your Profile',
          url: '/profile'
        }
      ]
    };
  }

  async componentDidMount() {
    //? Check for token in localStorage, if true set default headers
    const token = localStorage.getItem('ptDash');
    if (token) {
      setAuthToken(token);
      const decode = jwt_decode(token);
      await this.setState({
        user: {
          id: decode.id,
          userType: decode.userType
        }
      });
    }

    //? Check if parent, if true grab students associated with the user ID
    let findStudent = '/api/findStudent';
    if (this.state.user.userType === 'parent') {
      console.log('User is parent');
      findStudent = `/api/findStudent/${this.state.user.id}`;
    }

    //? Run all calls for info that needs to be retrieved.
    axios
      .all([
        axios.get('/api/findUser'),
        axios.get('/api/findEvent'),
        axios.get(findStudent)
      ])
      .then(
        axios.spread((userData, eventData, studentData) => {
          console.log('User:', userData.data.user);
          console.log('Events:', eventData.data);
          console.log('Students:', studentData.data);
          this.setState({
            user: userData.data.user,
            eventArr: eventData.data,
            studentArr: studentData.data,
            loading: false
          });
        })
      )
      .catch(err => console.log(err.response));
  }

  handleLogout = () => {
    localStorage.removeItem('ptDash');
    this.setState({ redirect: true });
  };

  render() {
    const { redirect, user } = this.state;
        
    //? Redirect to homepage if logged-out
    if (redirect) {
      return <Redirect to='/' />;
    }
    
    //? --------------------------------------------------------
    //? Content to render when app is loading
    let dashboardContent;
    if (this.state.loading) {
      dashboardContent = (
        <div className={styles.container}>
          <h2>Loading...</h2>
          <Logo />
        </div>
      );
    }
    //? Main content to render once app is finished loading
    else {
      dashboardContent = (
        <>
          <Layout profileImg={user.profileImage} name={user.firstName}>
            <Announcements events={this.state.eventArr} />
            <DashBtns dashBtns={this.state.dashBtns} />
            <Events events={this.state.eventArr}/>
          </Layout>
          <button onClick={this.handleLogout}>Logout</button>
        </>
      );
    }

    return <div className='dashboardPage'>{dashboardContent}</div>;
  }
}

export default Dashboard;
