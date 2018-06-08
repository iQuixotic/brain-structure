import React, {Component} from 'react';
import {Navbar, Footer} from '../components/Nav/index';
import {CardSpace, InputCard, BackDrop, MyDecks} from '../components/Card/index';
import {Card} from '../container/Card/index';
import {Col, Row} from '../components/Grid/index';
import {Carousel} from '../components/Carousel/index';
import './Pages.css';


// must pass a ref through main page to update backdrop
// const style1 = {
//     backgroundImage: {fc},
//     backgroundSize: "100% 100%"
// }

// const style2 = {
//    backgroundColor: "rgb(94, 92, 92)"
// }

class MainPage extends Component {
// constructor(props){
//     super(props)
// }
  render() {
    return (
        <div id="MainPage">

            <Navbar header="I Believe"/>
        
            <Row id="main-bd-row"> 
                <Col id="" size="md-2">
                    <Card id="button-card" >
                        <Carousel />
                    </Card>
                </Col>
                <Col size="md-8">
                {/* i think i need to update something here maybe, but maybe
                i can do it from the other component... */}
                    <BackDrop id="bd"/>
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
            <Row>
                <Footer />
            </Row>
              
        </div>
    );
    }
}      

export default MainPage;
