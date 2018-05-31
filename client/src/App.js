import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Container, Col } from './components/Grid/Z-index';
import { VerifyBtn, DelBtn, Btn, ComboBtn, Dropdown, FwdBtn, BackBtn, DislikeBtn, LikeBtn, SubmitBtn } from './components/Buttons/Z-index';
import { BackDrop, NoteCardL } from './components/Card/Z-index'


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
          <Col size="md-6">
        <Row>
          <Btn> I ams what I ams </Btn>
          <DelBtn> Delete </DelBtn>
          <ComboBtn side1="what?" side2="OK"> </ComboBtn>
          <VerifyBtn />
          <Dropdown />
        </Row>
        </Col>
        <Row>
        <BackDrop>
          <Row>
            <FwdBtn size='2x'/>
            <BackBtn size='5x'/>
            <LikeBtn size='5x'/>
            <DislikeBtn size='4x' />
            <SubmitBtn> I made happieness </SubmitBtn>
          </Row>
        </BackDrop>

          <Row>
            <FwdBtn size='2x'/>
            <BackBtn size='5x'/>
            <LikeBtn size='5x'/>
            <DislikeBtn size='4x' />
            <SubmitBtn> I made happieness </SubmitBtn>
          </Row>
        </Row>
        <Col size="md-9">
          <NoteCardL />
        </Col>
        </Container>


      </div>
    );
  }
}

export default App;
