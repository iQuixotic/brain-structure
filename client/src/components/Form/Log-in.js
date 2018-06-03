import React, {Component} from 'react';
import {Row, Container, Col, Wrap} from '../Grid/Z-index';
import {Card} from '../Card/Z-index';
import '../../Uni.css';


class Login extends Component {
  render() {
    return (
        <div id="Login">
            
                        <Container> 
                            <Wrap cn="text-center">
                                <Card> 
                                    <Container>
                                        <Wrap cn="log-in-form justify-content-center">  Username: 
                                            <input type="name" placeholder="tony637"/>Password:
                                            <input type="password" placeholder="......"/>
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