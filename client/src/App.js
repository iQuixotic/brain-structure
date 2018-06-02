import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Register, Login, Redirect } from './pages/Z-index';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Route exact path="/home" component={Main} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/redirect" component={Redirect} />
          <Route exact path="/" component={Login} />
        </div>
      </Router>

    );
  }
}

export default App;
