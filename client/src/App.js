import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';

import CreateReport from './components/Reports/CreateReport/CreateReport';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route exact path='/reports/create' component={CreateReport} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
