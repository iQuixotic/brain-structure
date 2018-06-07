import React from "react";
import './style.css';

const Footer = props => (
  <div id={props.id}
    className="footer">{props.children}
  </div>
);

export default Footer;
