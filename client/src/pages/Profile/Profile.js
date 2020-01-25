import React, { Component } from 'react';
import UserContext from '../../UserContext';
import Layout from '../../components/Layout/Layout';
import Loading from '../../components/UI/Loading/Loading';
import ProfileForm from './ProfileForm/ProfileForm';

class Profile extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      redirect: false,
      loading: true,
      user: {}
    };
  }

  onSubmit = (formObj) => {
    console.log('[PROFILE]', formObj);
  }


  render() {
    const { user } = this.context;
    if (user) console.log('User:', user);

    return (
      <>
        <Layout miniHeader title='Your Profile' />
        {user
          ? <ProfileForm user={user} onSubmit={this.onSubmit} />
          : <Loading />
        }
      </>
    );
  }
}

export default Profile;
