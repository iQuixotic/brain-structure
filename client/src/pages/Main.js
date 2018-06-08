import React, {Component} from 'react';
import {Navbar, Footer} from '../components/nav/index';
import {CardSpace, InputCard, BackDrop, MyDecks} from '../components/cards/index';
import {Col, Row} from '../components/grid/index';
import {Card} from '../container/Card/index';
import {Carousel} from '../container/Carousel/index';
import './pages.css';


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
state = {
    backDropUsing: 'pic',
}

changeViewHandler = using => {
    console.log('i made it here ')
    this.setState({
        backDropUsing: using
    })
}

  render() {
    return (
        <div id="MainPage">

            <Navbar header="I Believe"/>
        
            <Row id="main-bd-row"> 
                <Col id="" size="md-2">
                    <Card id="button-card" >
                        {/* <Carousel /> */}
                    </Card>
                </Col>
                <Col size="md-8">
                {/* i think i need to update something here maybe, but maybe
                i can do it from the other component... */}
                    <BackDrop view={this.state.backDropUsing} id="bd"/>
                </Col>
                <Col size="md-2">
                    <Card id="long2">
                        <Carousel view={this.changeViewHandler.bind(this)} />
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
