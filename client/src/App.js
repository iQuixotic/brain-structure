import React, { Component } from 'react';
import logo from './logo.svg';
import { Row, Container, Col, Wrap } from './components/Grid/Z-index';
import { VerifyBtn, DelBtn, Btn, ComboBtn, Dropdown, FwdBtn, BackBtn, DislikeBtn, LikeBtn } from './components/Buttons/Z-index';
import { BackDrop, NoteCardL, Card } from './components/Card/Z-index';
import { Input } from './components/Form/Z-index';
import './Global.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
                <Col size="md-6"><Input className="register-input" type="e-mail" placeholder="john@wiredmail.com" /></Col>
                <Col size="md-6"><Input className="register-input" placeholder="toommy" /></Col>
            </Row>
            
               First Name:
                <Input type="name" placeholder="John"/>Last Name: 
                <Input type="name" placeholder="Fred"/>Create a Password:
                <Input type="password"/>
          <Btn cn="btn">SUBMIT</Btn>
          </Wrap>
              
          
      
      
          </Container>
          </Card>
          </Wrap>
          </Container>
          <Btn> I ams what I ams </Btn>
          <DelBtn> Delete </DelBtn>
          <ComboBtn side1="what?" side2="OK"> </ComboBtn>
          <VerifyBtn />
          <Dropdown />
        </Col>
        </Row>
        
        <Row>
        <BackDrop>
          <Row>
            <FwdBtn size='2x'/>
            <BackBtn size='5x'/>
            <LikeBtn size='5x'/>
            <DislikeBtn size='4x' />
            <Btn> I made happieness </Btn>
          </Row>
        </BackDrop>
          <Row>
            <FwdBtn size='2x'/>
            <BackBtn size='5x'/>
            <LikeBtn size='5x'/>
            <DislikeBtn size='4x' />
            <Btn> I made happieness </Btn>
          </Row>
        </Row>
        </Container>
      <Row>
      
        <Col size="md-3">
          <Card />
        </Col>
        <Col size="md-7">
          <NoteCardL />
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
                                                <Col size="md-6"><Input className="register-input" type="e-mail" placeholder="john@wiredmail.com" /></Col>
                                                <Col size="md-6"><Input className="register-input" placeholder="toommy" /></Col>
                                            </Row>       
                                                 
                                            <Row> 
                                                <Col size="md-6"> First Name: </Col> <Col size="md-6"> Last: </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-6"><Input className="register-input" type="e-mail" placeholder="john@wiredmail.com" /></Col>
                                                <Col size="md-6"><Input className="register-input" placeholder="toommy" /></Col>
                                            </Row>    
                                            <Row>Password:  
                                              <Wrap cn="pix-pad2"/>                                         
                                            <Input type="password pix-pad" /></Row>
                                            <Row>Verify Password:  
                                            <Wrap cn="pix-pad1"/>                                     
                                            <Input type="password" /></Row>
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

export default App;
