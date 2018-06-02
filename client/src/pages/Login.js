import React, { Component } from 'react';
import logo from '../logo.svg';
import { Row, Container, Col, Wrap } from '../components/Grid/Z-index';
import { VerifyBtn, DelBtn, Btn, ComboBtn, Dropdown, FwdBtn, BackBtn, DislikeBtn, LikeBtn } from '../components/Buttons/Z-index';
import { BackDrop, NoteCardL, Card } from '../components/Card/Z-index';
import { Input } from '../components/Form/Z-index';
import '../Global.css';


class Login extends Component {
  render() {
    return (
        <div id="Login">
            <Container>
             <Row>
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

export default Login;
