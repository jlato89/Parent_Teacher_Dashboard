import React, { Component } from 'react';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
import Header from '../../components/Header/Header';
import ProfileForm from './ProfileForm/ProfileForm';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      loading: true,
      user: {}
    };
  }

  componentDidMount() {
    //? Check for token in localStorage, if true set default headers
    const token = localStorage.getItem('ptDash');
    if (token) {
      setAuthToken(token);
    }

    axios
      .get('/api/findUser')
      .then(user => {
        console.log(user.data);
        this.setState(user.data);
      })
      .catch(err => console.log(err.response));
  }

  onSubmit = (formObj) => {
    console.log('[Container]', formObj);
  }


  render() {
    const { user } = this.state;
    return (
      <div>
        <Header miniHeader={true} title='Your Profile' />
        {user ? (
          <ProfileForm user={user} onSubmit={this.onSubmit} />
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default Profile;
