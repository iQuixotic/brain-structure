import React, {Component} from "react";
import {withRouter, Link} from 'react-router-dom';
import {Wrap} from '../Grid/Z-index';
import {Jumbotron} from '../Jumbotron/Z-index';
import './style.css';

class Navbar extends Component {
//   constructor(props) {
//     super(props);
// }
  render() {
    return (

  <nav id="Nav" >   
  <Wrap cn="nav">
    <ul className="nav">
     
      <li className="">
        <Link className="nav-link active" to="/home">Home</Link>
      </li>
      <li className="">
        <Link className="nav-link" to="/redirect">Cards</Link>
      </li>
      <li className="">
        <Link className="nav-link" to="/">Login</Link>
      </li>
     
      </ul>

      
      {/* <Wrap cn=""> */}
      <ul className="nav ml-auto">
      <li className="right-side">
      
        <Link className="right-side nav-link disabled" to="/register">Register</Link>
      </li>
      </ul>
      </Wrap>
      {/* </Wrap> */}
     

  </nav>
  

    )
  }
}
export default withRouter(Navbar);