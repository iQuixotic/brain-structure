import React, {Component} from "react";
import {withRouter, Link} from 'react-router-dom';
// import { Link } from 'react-router';

import './style.css';

// GetReactPathHandler(e) {
//   e.preventDefault();
//   this.props.history.push('/');
// }

class Navbar extends Component {
  constructor(props) {
    super(props);
    // this.GetReactPathHandler = this.GetReactPathHandler.bind(this);
}
  render() {
    return (
  <nav id="Nav">
    <ul>
      <li>
        <Link className="nav-link active" to="/home">Home</Link>
      </li>
      <li>
        <Link className="nav-link" to="/redirect">Cards</Link>
      </li>
      <li>
        <Link className="nav-link" to="/">Login</Link>
      </li>
      <li>
        <Link className="nav-link disabled" to="/register">Register</Link>
      </li>
    </ul>
  </nav>

    )
  }
}
export default withRouter(Navbar);