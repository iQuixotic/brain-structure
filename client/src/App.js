import React, { Component } from 'react';
import { Router, Route } from "react-dom";
import { Home, Register, Login, Redirect } from './pages/Z-index';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/redir" component={Redirect} />
        <Route path="/" component={Login} />
      </Router>

      </div>
    );
  }
}

export default App;
