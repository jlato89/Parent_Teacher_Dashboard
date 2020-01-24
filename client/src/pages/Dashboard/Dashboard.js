import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../UserContext';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import DashBtns from '../../components/DashBtns/DashBtns';
import Announcements from '../../components/Events/Announcement/Announcement';
import UpcomingEvents from '../../components/Events/UpcomingEvents/UpcomingEvents';
import Loading from '../../components/UI/Loading/Loading';

class Dashboard extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      redirect: false,
      loading: true,
      eventArr: []
    };
  }

  componentDidMount() {
    //? Grab events
    axios('/api/findEvent')
      .then(events => {
        console.log('Events:', events.data);
        this.setState({ eventArr: events.data, loading: false })
      })
      .catch(err => console.log(err));
  }

  //? Logout Button
  handleLogout = () => {
    localStorage.removeItem('ptDash');
    this.setState({ redirect: true });
  };

  render() {
    const { redirect, eventArr, loading } = this.state;
    const user = this.context;
    if (user) console.log('User:', user);

    //? Redirect to homepage if logging-out
    if (redirect) {
      return <Redirect to='/' />;
    }

    return (
      //? Show loading screen if userContext or events haven't loaded
      loading || !user ? <Loading />
        :
        <>
          <Layout
            onClickLogout={this.handleLogout}
            profileImg={user.profileImage}
            name={user.firstName}
          >
            <Announcements events={eventArr} />
            <DashBtns access={user.userType} />
          </Layout>
          <footer>
            <UpcomingEvents events={eventArr} />
          </footer>
        </>
    );
  }
}

export default Dashboard;
