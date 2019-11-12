import React, { Component } from 'react';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
import Header from '../../components/Header/Header';

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

  render() {
    const { user } = this.state;
    return (
      <div>
        <Header miniHeader={true} title='Your Profile' />
        {user ? (
          <table>
            <tbody>
              {Object.keys(user).map((keyName, keyIndex) => (
                <tr key={keyIndex}>
                  <th>{keyName}</th>
                  <th>
                    <input placeholder={user[keyName]} />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default Profile;
