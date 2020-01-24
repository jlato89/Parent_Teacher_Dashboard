import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { UserProvider } from './UserContext';
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

const App = () => {
  const [user, setUser] = useState();
  const token = localStorage.getItem('ptDash');

  if (!user && token) {
    console.log('[APP] Setting current user to state');
    setAuthToken(token);
    setUser({ userId: 123, name: 'Josh L' }) // Inittial testing data
    axios('/api/findUser').then(user => setUser(user.data.user)); //! Not being set on first render
  }

  return (
    <UserProvider value={user}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
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

export default App;
