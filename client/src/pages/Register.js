import React, { Component } from 'react';
import logo from './logo.svg';
import { Row, Container, Col, Wrap } from './components/Grid/Z-index';
import { VerifyBtn, DelBtn, Btn, ComboBtn, Dropdown, FwdBtn, BackBtn, DislikeBtn, LikeBtn } from './components/Buttons/Z-index';
import { BackDrop, NoteCardL, Card } from './components/Card/Z-index';
import { Input } from './components/Form/Z-index';


class Register extends Component {
  render() {
    return (
    <div className="Register">     

        <Container>
            <Row>
              <Col size="md-1" />
                    <Col size="md-5">
                        <Container>
                            <Wrap cn="text-center">
                                <Card> 
                                    <Container>
                                        <Wrap cn="register-form justify-content-center">Register
                                            <Row> 
                                                <Col size="md-6"> E-mail: </Col> <Col size="md-6"> User Name: </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-6"><Input className="register-input" type="e-mail" placeholder="john@wiredmail.com" /></Col>
                                                <Col size="md-6"><Input className="register-input" placeholder="toommy" /></Col>
                                            </Row>       
                                                 
                                            <Row> 
                                                <Col size="md-6"> First Name: </Col> <Col size="md-6"> Last Name: </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-6"><Input className="register-input" type="e-mail" placeholder="john@wiredmail.com" /></Col>
                                                <Col size="md-6"><Input className="register-input" placeholder="toommy" /></Col>
                                            </Row>    
                                            <Row>Password: <Input type="password"/></Row>
                                            <Row>Verify Password:<Input type="password"/></Row>
                                            <Btn cn="btn">SUBMIT</Btn>
                                        </Wrap>      
                                    </Container>
                                </Card>
                            </Wrap>
                        </Container>
                    </Col>
           


                    <Col size="md-5">
                        <Container> 
                            <Wrap cn="text-center">
                                <Card> 
                                    <Container>
                                        <Wrap cn="log-in-form justify-content-center">  Username: 
                                            <Input type="name" placeholder="tony637"/>Password:
                                            <Input type="password" placeholder="......"/>
                                            <Btn cn="btn">Log-in</Btn>
                                            <Btn cn="btn">I Don't have a Log-in </Btn>
                                        </Wrap>      
                                    </Container>
                                </Card>
                            </Wrap>
                        </Container>
                    </Col>
            </Row>
        </Container>
    </div>
    );
  }
}      
     
export default Register;
