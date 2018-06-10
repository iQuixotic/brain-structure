import React, {Component} from 'react';
import {Navbar, Footer} from '../components/nav/index';
import {CardSpace, InputCard, BackDrop, MyDecks} from '../components/cards/index';
import {Col, Row} from '../components/grid/index';
import {Card} from '../container/Card/index';
import {Carousel} from '../container/Carousel/index';
import './pages.css';
import API from '../utils/API';
import {fc} from '../assets/brainImages/index';
import {brain3d} from '../assets/3d/index';

let startingBD = {img: fc}
let brainView = {img: brain3d}


class MainPage extends Component {

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
    },
    disorders: [],
    disorderUsing: 'Schizophrenia'
}

componentWillMount = () => {
    this.getAllDisorders();
    this.getOneDisorder();
}

getAllDisorders = () => {     
    API.getDisData()
        .then(res => { console.log('res.json')
        this.setState({
            disorders: res.data                
        })      
        console.log(res.data) 
        })          
        console.log(this.state.disorders)
};

getOneDisorder = (disorderUsing) => {
    API.getThisDisData()
        .then(res => {
            console.log('get this disorder booooyyyy')
            this.setState({
                disorderUsing: res.data
            })
            console.log(res.data)
        })
        console.log(this.state.disorders)
}


changeViewHandler = using => {
    console.log('i made it here ')
    this.setState({
        backDropView: using
    })
}


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
                        <BackDrop view={brainView.img} />
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
