import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Main, RegisterPage, LoginPage, Redirect, CardPage} from '../pages/Z-index';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Route exact path="/home" component={Main} />
          <Route exact path="/cards/all" component={CardPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/redirect" component={Redirect} />
          <Route exact path="/" component={LoginPage} />
        </div>
      </Router>

    );
  }
}

export default App;
 