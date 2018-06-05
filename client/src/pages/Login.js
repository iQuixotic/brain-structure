import React, {Component} from 'react';
import {Row, Container, Col, Wrap} from '../components/Grid/Z-index';
import {Login} from '../components/Form/Z-index';
import {Navbar, Footer} from '../components/Nav/Z-index';
import './Pages.css';

class LoginPage extends Component {
  render() {
    return (
        <div id="LoginPage">

        <Navbar />
       
            <Container>                
                <Wrap cn="pad-vert cent">
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">                    
                            <Login />                     
                        </Col> 
                    </Row> 
                </Wrap>                   
            </Container>       
        <Footer />   
        </div>
    );
    }
}      

export default LoginPage;
