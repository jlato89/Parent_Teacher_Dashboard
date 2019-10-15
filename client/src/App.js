import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import TeacherDash from './pages/TeacherDash';
import ParentDash from './pages/ParentDash';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authType: ''
    };
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/teacherdash' component={TeacherDash} />
            <Route exact path='/parentdash' component={ParentDash} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
