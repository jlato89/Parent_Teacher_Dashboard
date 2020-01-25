import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './UserContext';
import PrivateRoute from './utils/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import axios from 'axios';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import CreateReport from './pages/Reports/CreateReport/CreateReport';
import Students from './pages/Students/Students';
import EventList from './pages/EventList/EventList';
import Reports from './pages/Reports/Reports';
import AddStudent from './pages/Students/AddStudent/AddStudent';
import NoMatch from './pages/NoMatch';

class App extends Component {
  constructor() {
    super();
    this.state = { user: null };
  }

  componentDidMount() {
    this.updateUser()
  }

  updateUser = () => {
    const token = localStorage.getItem('ptDash');
    if (token) setAuthToken(token);
    console.log('[APP] Updating current user in state...');
    axios('/api/findUser')
      .then(user => {
        let result = user.data;
        if (result === 'No auth token') result = null;
        this.setState({ user: result });
      });
  }

  logoutHandler = () => {
    localStorage.removeItem('ptDash');
    this.setState({ user: null });
  };

  render() {
    const { user } = this.state;
    const value = {
      user,
      logoutUser: this.logoutHandler
    }

    return (
      <UserProvider value={value}>
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => <Login {...props} updateUser={() => this.updateUser()} />} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/createReport' component={CreateReport} />
            <PrivateRoute exact path='/students' component={Students} />
            <PrivateRoute exact path='/addStudent' component={AddStudent} />
            <PrivateRoute exact path='/events' component={EventList} />
            <PrivateRoute exact path='/reports' component={Reports} />
            <PrivateRoute exact path='/profile' component={Profile} />

            <Route component={NoMatch} />
          </Switch>
        </Router>
      </UserProvider>
    );
  }
}

export default App;
