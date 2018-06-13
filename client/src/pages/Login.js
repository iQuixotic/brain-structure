import React, {Component} from 'react';
import {Row, Container, Col, Wrap} from '../components/grid/index';
import {Navbar, Footer} from '../components/nav/index';
import {Login} from '../container/Forms/index';
import './pages.css';

class LoginPage extends Component {
  render() {
    return (
        <div id="LoginPage">

        <Navbar header="Neuro-Cards" />
       
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
