import React, {Component} from "react";
import {withRouter, Link} from 'react-router-dom';
import {Wrap} from '../Grid/Z-index';
import {Jumbotron} from '../Jumbotron/Z-index';
import './style.css';



class Navbar extends Component {
  constructor(props) {
    super(props);
  }
state = {
}


  render() {
    return (
      <div>
      <Jumbotron id="topper">
        <Wrap cn="jumbo-moon">
          Neuro App
        </Wrap>
      </Jumbotron>

      <Jumbotron id="all-nav-links">
  <nav id="Nav" >   
  <Wrap cn="nav">
    <ul className="nav">
     
      <li className="each-nav">
        <Link className="each-nav nav-link active"  
        // onClick={}   
        to="/home">Home</Link>
      </li>
      <li className="each-nav">
        <Link className="each-nav nav-link"  
        // onClick={} 
        to="/redirect">Cards</Link>
      </li>
      <li className="">
        <Link className="each-nav nav-link"
        //  onClick={}
         to="/">Login</Link>
      </li>
     
      </ul>
      <ul className="nav ml-auto">
      <li className="">
      
        <Link className="each-nav right-side nav-link" 
        // onClick={}
        to="/register">Register</Link>
      </li>
      </ul>
      </Wrap>
  </nav>
  </Jumbotron>
  </div>

    )
  }
}
export default withRouter(Navbar);