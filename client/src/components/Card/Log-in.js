import React, { Component } from 'react';
import { Row, Container, Col, Wrap } from '../Grid/Z-index';
import { Btn } from '../Buttons/Z-index';
import { BackDrop, NoteCardL, Card } from '../Card/Z-index';
import { Input } from '../Form/Z-index';
import '../../Global.css';


class Login extends Component {
  render() {
    return (
        <div id="Login">
            
                        <Container> 
                            <Wrap cn="text-center">
                                <Card> 
                                    <Container>
                                        <Wrap cn="log-in-form justify-content-center">  Username: 
                                            <Input type="name" placeholder="tony637"/>Password:
                                            <Input type="password" placeholder="......"/>
                                            <button className="my-btn btn">Log-in</button>
                                            <button className="my-btn btn">I Don't have a Log-in </button>
                                        </Wrap>      
                                    </Container>
                                </Card>
                            </Wrap>
                        </Container>
                
            
        </div>
    );
    }
}      

export default Login;