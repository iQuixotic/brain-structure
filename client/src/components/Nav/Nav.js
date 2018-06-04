import React, {Component} from "react";
import {withRouter, Link} from 'react-router-dom';
import './style.css';

class Navbar extends Component {
//   constructor(props) {
//     super(props);
// }
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