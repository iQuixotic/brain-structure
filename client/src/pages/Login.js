import React, { Component } from 'react';
import { Row, Container, Col, Wrap } from '../components/Grid/Z-index';
import { Btn } from '../components/Buttons/Z-index';
import { BackDrop, NoteCardL, Card, Login } from '../components/Card/Z-index';
import { Input } from '../components/Form/Z-index';
import '../Global.css';


class LoginPage extends Component {
  render() {
    return (
        <div id="LoginPage">
                <Container>
                    <Row>
                        <Col size="md-4" />
                        <Wrap cn="pad-top">
                            <Login />
                        </Wrap>
                    </Row>
                </Container>                 
        </div>
    );
    }
}      

export default LoginPage;
