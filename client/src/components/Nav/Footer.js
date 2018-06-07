import React from "react";
import {Container} from '../Grid/Z-index';
import './style.css';

const Footer = props => (
  <div id={props.id}
    className="footer">
      <Container>
          {props.children}
      </Container>
  </div>
);

export default Footer;
