import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
// import jwt_decode from 'jwt-decode';
import Layout from '../../components/Layout/Layout';
import Announcements from '../../components/Events/Announcement/Announcement';
import DashBtns from '../../components/DashBtns/DashBtns';
import UpcomingEvents from '../../components/Events/UpcomingEvents/UpcomingEvents';
import Loading from '../../components/Loading/Loading';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      loading: true,
      user: {},
      eventArr: [],
      reportArr: [],
      dashBtns: [
        {
          name: 'Create Report',
          url: '/createReport'
        },
        {
          name: 'Add Students',
          url: '/addStudent'
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
          name: 'Reports',
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
      // const decode = jwt_decode(token);
      // await this.setState({
      //   user: {
      //     id: decode.id,
      //     userType: decode.userType
      //   }
      // });
    }

    //? Run all calls for info that needs to be retrieved.
    axios
      .all([
        axios.get('/api/findUser'),
        axios.get('/api/findEvent')
      ])
      .then(
        axios.spread((userData, eventData) => {
          console.log('Current User:', userData.data.user);
          console.log('All Events:', eventData.data);
          this.setState({
            user: userData.data.user,
            eventArr: eventData.data,
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
      dashboardContent = <Loading />;
    }
    //? Main content to render once app is finished loading
    else {
      dashboardContent = (
        <>
          <Layout
            onClickLogout={this.handleLogout}
            profileImg={user.profileImage}
            name={user.firstName}
          >
            <Announcements events={this.state.eventArr} />
            <DashBtns dashBtns={this.state.dashBtns} />
            <UpcomingEvents events={this.state.eventArr} />
          </Layout>
        </>
      );
    }

    return <div className='dashboardPage'>{dashboardContent}</div>;
  }
}

export default Dashboard;
