import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import Authenticate from '../utils/Authenticate';
import Header from '../components/Header/Header';
import Announcements from '../components/Announcement/Announcement';
import Logo from '../components/Logo/Logo';
import MenuBtn from '../components/MenuBtn/MenuBtn';

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
      eventArr: [],
      studentArr: []
    };
  }

  async componentDidMount() {
    //? Check for token in localStorage, if true set default headers
    const token = localStorage.getItem('ptDash');
    const decode = jwt_decode(token);
    if (Authenticate(token)) {
      setAuthToken(token);
      await this.setState({
        user: {
          id: decode.id,
          userType: decode.userType
        }
      });
    }

    //? Check if parent, if true grab students associated with the user ID
    let findStudent = '/findStudent';
    if (this.state.user.userType === 'parent') {
      console.log('User is parent');
      findStudent = `/findStudent/${this.state.user.id}`;
    }

    //? Run all calls for info that needs to be retrieved.
    axios
      .all([
        axios.get('/findUser'),
        axios.get('/findEvent'),
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
    let dashboardContent;

    //? Pull announcements from state.eventArr
    const announcements = this.state.eventArr.filter(event => {
      return event.isAnnouncement === true;
    });

    //? Redirect to homepage if logout
    if (redirect) {
      return <Redirect to='/' />;
    }

    //? Content to render when app is loading
    if (this.state.loading) {
      dashboardContent = (
        <div style={styles.loadingWrapper}>
          <h2 style={{ marginTop: '5%' }}>Loading...</h2>
          <Logo />
        </div>
      );
    }
    //? Main content to render once app is finished loading
    else {
      dashboardContent = (
        <>
          <button onClick={this.handleLogout}>Logout</button>
          <h2>
            Welcome {user.firstName} {user.lastName}!
          </h2>

          {/* Menu Btns */}
          <main>
            <MenuBtn name='Create Report' link='/link' />
            <MenuBtn name='Students' link='/link' />
            <MenuBtn name='Create Incident' link='/link' />
            <MenuBtn name='Reports & Incidents' link='/link' />
            <MenuBtn name='Create Event or Announcement' link='/link' />
            <MenuBtn name='Current Events & Announcements' link='/link' />
          </main>
        </>
      );
    }

    return (
      <div className='dashboardPage'>
        <Header />
        <Announcements announcements={announcements} />
        {dashboardContent}
      </div>
    );
  }
}

export default Dashboard;
