import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import TeacherDash from './pages/TeacherDash';
import ParentDash from './pages/ParentDash';
import NoMatch from './pages/NoMatch';

class App extends Component {
     constructor() {
      super();
      this.state = {
         authType: ''
      };
   }

   render() {
      return (
         <div>
            <Router>
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/teacherdash' component={TeacherDash} />
                  <Route exact path='/parentdash' component={ParentDash} />
                  <Route component={NoMatch} />
               </Switch>
            </Router>
         </div>
      );
   }
}

export default App;
