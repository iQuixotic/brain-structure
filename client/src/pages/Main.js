import React, {Component} from 'react';
import {Navbar, Footer} from '../components/Nav/Z-index';
import {CardSpace, Card, InputCard, BackDrop, MyDecks} from '../components/Card/Z-index';
import {Wrap, Container, Col, Row} from '../components/Grid/Z-index';
import {Carousel} from '../components/Carousel/Z-index';
import {Img} from '../components/Img/Z-index';
import './Pages.css';

class MainPage extends Component {
  render() {
    return (
        <div id="MainPage">

            <Navbar header="I Believe"/>
        
            <Row id="main-bd-row"> 
                <Col id="" size="md-2">
                    <Card id="button-card" >
                        <img className="d-block w-100" 
                        src="../assets/brainImages/whole-brain.jpg"
                         alt="First slide" />
                    </Card>
                </Col>
                <Col size="md-8">
                    <BackDrop />
                </Col>
                <Col size="md-2">
                    <Card id="long2">
                        <Carousel />
                    </Card>
                    <MyDecks crdId="MyDecksCard" />
                </Col>
            </Row>

            <Row id="index-card-row">
                <Col id="input-col" size="md-3">
                    <InputCard />
                </Col>
                <Col id="crd-col" size="md-6">
                    <CardSpace  />
                </Col>
                <Col size="md-3">
                    <Card id="length" />
                </Col>
            </Row>

            <Footer />
              
        </div>
    );
    }
}      

export default MainPage;
