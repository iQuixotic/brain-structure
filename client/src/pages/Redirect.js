import React, {Component} from 'react';
import logo from '../logo.svg';
import { Row, Container, Col, Wrap } from '../components/Grid/Z-index';
import {FwdCaret, BackCaret, DislikeBtn, LikeBtn} from '../components/Buttons/Z-index';
import {BackDrop, CardSpace, Card} from '../components/Card/Z-index';
import {Navbar} from '../components/Nav/Z-index';
import './Pages.css';


class Redirect extends Component {
  render() {
    return (
      <div className="Redirect">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Navbar />
        <Container>
         
        <Row>
        <Col size="md-3"/>
          <Col size="md-6">
        <Container>
          <Wrap cn="text-center">
          <Card> 
          <Container>
             
            <Wrap cn="register-form justify-content-center">Register
            <Row> <Col size="md-6"> E-mail: </Col> <Col size="md-6"> User Name: </Col></Row>
            <Row>
                <Col size="md-6"><input className="register-input" type="e-mail" placeholder="john@wiredmail.com" /></Col>
                <Col size="md-6"><input className="register-input" placeholder="toommy" /></Col>
            </Row>
            
               First Name:
                <input type="name" placeholder="John"/>Last Name: 
                <input type="name" placeholder="Fred"/>Create a Password:
                <input type="password"/>
          </Wrap>
              
          
      
      
          </Container>
          </Card>
          </Wrap>
          </Container>
        </Col>
        </Row>
        
        <Row>
        <BackDrop>
          <Row>
            <FwdCaret size='2x'/>
            <BackCaret size='5x'/>
            <LikeBtn size='5x'/>
            <DislikeBtn size='4x' />
          </Row>
        </BackDrop>
          <Row>
            <FwdCaret size='2x'/>
            <BackCaret size='5x'/>
            <LikeBtn size='5x'/>
            <DislikeBtn size='4x' />
          </Row>
        </Row>
        </Container>
      <Row>
      
        <Col size="md-3">
          <Card />
        </Col>
        <Col size="md-7">
          <CardSpace />
        </Col>
        <Col size="md-2">
          <Card />
        </Col>
      </Row>



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
                                                <Col size="md-6"><input className="register-input" type="e-mail" placeholder="john@wiredmail.com" /></Col>
                                                <Col size="md-6"><input className="register-input" placeholder="toommy" /></Col>
                                            </Row>       
                                                 
                                            <Row> 
                                                <Col size="md-6"> First Name: </Col> <Col size="md-6"> Last: </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-6"><input className="register-input" type="e-mail" placeholder="john@wiredmail.com" /></Col>
                                                <Col size="md-6"><input className="register-input" placeholder="toommy" /></Col>
                                            </Row>    
                                            <Row>Password:  
                                              <Wrap cn="pix-pad2"/>                                         
                                            <input type="password pix-pad" /></Row>
                                            <Row>Verify Password:  
                                            <Wrap cn="pix-pad1"/>                                     
                                            <input type="password" /></Row>
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
                                            <input type="name" placeholder="tony637"/>Password:
                                            <input type="password" placeholder="......"/>
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

export default Redirect;
