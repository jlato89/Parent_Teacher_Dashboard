import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
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
      eventArr: [],
      studentArr: []
    };
  }

  componentDidMount() {
    //? Check for token in localStorage, if true set default headers
    const token = localStorage.getItem('ptDash');
    if (token) {
      setAuthToken(token);
    }

    axios
      .get('/findUser')
      .then(userData => {
        console.log('User:', userData.data.user);
        this.setState({ user: userData.data.user })
      })
      .catch(err => console.log(err.response));

    //? Check if parent, if true grab students associated with the user ID
    let findStudent = '/findStudent'
    if (!this.state.user.isTeacher) {
      findStudent = `/findStudent/${this.state.user.id}`; //! Set parent ID here
    }

    //? Run all calls for info that needs to be retrieved.
    axios
      .all([
        axios.get('/findEvent'),
        axios.get(findStudent)
      ])
      .then(
        axios.spread((eventData, studentData) => {
          console.log('Events:', eventData.data);
          console.log('Students:', studentData.data);
          this.setState({
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
              Member since: <Moment date={user.createdAt} format='MM/DD/YYYY' />
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
