import React, { Component } from 'react';
import {Row, Container, Col, Wrap} from '../components/Grid/Z-index';
import {Login} from '../components/Form/Z-index';
import './Pages.css';


class LoginPage extends Component {
  render() {
    return (
        <div id="LoginPage">
                        <Wrap cn="pad-top">
                            <Login />
                        </Wrap>                 
        </div>
    );
    }
}      

export default LoginPage;
