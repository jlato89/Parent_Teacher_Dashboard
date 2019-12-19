import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import Layout from '../../components/Layout/Layout';
import DashBtns from '../../components/DashBtns/DashBtns';
import Announcements from '../../components/Events/Announcement/Announcement';
import UpcomingEvents from '../../components/Events/UpcomingEvents/UpcomingEvents';
import Loading from '../../components/UI/Loading/Loading';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      loading: true,
      user: {},
      eventArr: [],
      reportArr: [],
    };
  }

  async componentDidMount() {
    //? Check for token in localStorage, if true set default headers
    const token = localStorage.getItem('ptDash');
    if (token) setAuthToken(token);

    //? Start initial Axios Calls
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
    const { redirect, user, eventArr } = this.state;
    let dashboardContent;

    //? Redirect to homepage if logged-out
    if (redirect) {
      return <Redirect to='/' />;
    }
    //? Content to render when app is loading
    if (this.state.loading) {
      dashboardContent = <Loading />;
    }
    //? Content to render when app is finished loading
    else {
      dashboardContent = (
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
    return <>{dashboardContent}</>;
  }
}

export default Dashboard;
