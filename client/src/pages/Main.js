import React, {Component} from 'react';
import {Navbar, Footer} from '../components/nav/index';
import {CardSpace, InputCard, BackDrop, MyDecks} from '../components/cards/index';
import {Col, Row} from '../components/grid/index';
import {Card} from '../container/Card/index';
import {Carousel} from '../container/Carousel/index';
import './pages.css';
import {fc} from '../assets/brainImages/index'

let startingBD = {img: fc}


class MainPage extends Component {
// constructor(props){
//     super(props)
// }

state = {
    backDropView: startingBD.img,
  
    iCard: {
        likes: 0,
        dislikes: 0,
        makingNote: false,
        content: "",
    },
    decks: {
        front: true,
        back: false
    }
}

changeViewHandler = using => {
    console.log('i made it here ')
    this.setState({
        backDropView: using
    })
}

// changeBackdropHandler = (whatToUse) => {

//     switch(whatToUse) {
//         case "pic":
//         this.setState({
//             backDropView: pic
//         })
//             break;
//         case "brain3d":
//         this.setState({
//             backDropView: brain3d
//         })
//             break;
//         case "disorder":
//         this.setState({
//             backDropView: disorder
//         })
//             break;
//         default: this.setState({
//             using: brain3d
//         })
//     }

// }

flipCardHandler = () => {
    console.log('Im gonna flip')
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
                    <BackDrop view={this.state.backDropView} id="bd"/>
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
