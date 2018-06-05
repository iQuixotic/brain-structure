import React, {Component} from 'react';
import {Navbar, Footer} from '../components/Nav/Z-index';
import {CardSpace, Card, InputCard} from '../components/Card/Z-index';
import {Wrap, Container, Col, Row} from '../components/Grid/Z-index';
import './Pages.css';

class MainPage extends Component {
  render() {
    return (
        <div id="MainPage">

        <Navbar />
            {/* <Container> */}
            <Row id="index-card-row">
                <Col id="input-col" size="md-3">
                    <InputCard />
                </Col>
                <Col id="crd-col" size="md-6">
                    <CardSpace />
                </Col>
                <Col size="md-3">
                    <Card />
                </Col>
            </Row>
            {/* </Container> */}

            <Footer />
              
        </div>
    );
    }
}      

export default MainPage;
