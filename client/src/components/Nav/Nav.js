import React from "react";
import {withRouter, Link} from 'react-router-dom';
import {Wrap} from '../Grid/Z-index';
import {Jumbotron} from '../Jumbotron/Z-index';
import './style.css';


const Navbar =(props) => {
    return (
      <div>
      <Jumbotron id="topper">
        <Wrap cn="jumbo-moon">
          {props.header}
        </Wrap>
      </Jumbotron>

      <Jumbotron id="all-nav-links">
  <nav id="Nav" >   
  <Wrap cn="nav">
    <ul className="nav">
     
      <li className="">
        <Link className="each-nav nav-link"  
        // onClick={}   
        to="/home">Home</Link>
      </li>
      <li className="">
        <Link className="each-nav nav-link"  
        // onClick={} 
        to="/cards/all">Cards</Link>
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
export default withRouter(Navbar);