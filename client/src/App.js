import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Container, Col } from './components/Grid';
import { VerifyBtn, DelBtn, Btn, ComboBtn, Dropdown, FwdBtn, BackBtn } from './components/Buttons/index';
// import { Col, Row, Container } from "../../components/Grid";

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
          <Btn> I ams what I ams </Btn>
          <DelBtn> Delete </DelBtn>
          <ComboBtn side1="what?" side2="OK"> </ComboBtn>
          <VerifyBtn />
          <Dropdown />
        </Row>
        <Row>
          <FwdBtn size='2x'/>
          <BackBtn size='5x'/>
        </Row>
        </Container>



      </div>
    );
  }
}

export default App;
