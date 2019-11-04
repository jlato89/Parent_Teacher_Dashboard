import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import NoMatch from './components/NoMatch/NoMatch';

import CreateReport from './pages/Reports/CreateReport/CreateReport';
import Students from './pages/Students/Students';
import EventList from './pages/EventList/EventList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/createReport' component={CreateReport} />
          <PrivateRoute exact path='/students' component={Students} />
          <PrivateRoute exact path='/events' component={EventList} />

          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
