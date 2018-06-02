import React, { Component } from 'react';
import { Row, Container, Col, Wrap } from '../components/Grid/Z-index';
import { Btn } from '../components/Buttons/Z-index';
import { Card } from '../components/Card/Z-index';
import { Login } from '../components/Card/Z-index';
import { Register } from '../components/Card/Z-index';
import { Input } from '../components/Form/Z-index';
import API from '../utils/API';
import '../Global.css';


class RegisterPage extends Component {

  render() {
    return (
    <div className="RegisterPage">   

        <Container>
            <Row>    
                {/* <Col size="md-1" /> */}
                <Wrap cn='pad-top'> 
                    <Col size="md-10">
                        <Register />
                    </Col>
                </Wrap>
                
                <Wrap cn="pad-top">                                 
                    <Login />
                </Wrap>
            </Row>
        </Container>
    </div>

    );
  }
}      
     
export default RegisterPage;
