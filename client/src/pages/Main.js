import React, {Component} from 'react';
import {Navbar, Footer} from '../components/nav/index';
import {CardSpace, BackDrop, MyDecks} from '../components/cards/index';
import {Btn} from '../components/buttons/index';
import {Disorders} from '../components/disorders/index';
import {Col, Row, Wrap} from '../components/grid/index';
import {Card, InputCard} from '../container/Card/index';
import {Carousel} from '../container/Carousel/index';
import './pages.css';
import API from '../utils/API';
import {fc} from '../assets/brainImages/index';
import {brain3d} from '../assets/3d/index';

let startingBD = {img: fc}
let brainView = {img: brain3d}

// let i = 0;
// let contentHolder = [];
class MainPage extends Component {

state = {
    backDropView: brainView.img,
    iCard: {        
        _id: 0,
        next: 7,
        prev: 0,
        likes: 0,
        dislikes: 0,
        makingNote: false,
        content: {_id: '57894037584rue',
                    content: {
                        front: 'here',
                        back: 'wego'
                    }},
    },
    disorders: [],
    disorderUsing: 'Schizophrenia'
}

componentDidMount = () => {
    this.getAllDisorders();
    this.getFirstCard();
  }
  
  getFirstCard = () => {     
    API.getCard()
        .then(res => { 
        this.setState({
            iCard: {
                _id: res.data._id,
                next: res.data._id+1,
                prev: res.data._id-1,
                likes: res.data.likes,
                dislikes: res.data.dislikes,
                makingNote: false,
                content: res.data.content        
            }       
        })      
        console.log(this.state.iCard._id)
        console.log(this.state.iCard.next)
        console.log(this.state.iCard.prev)
        console.log(res.data)
        })          
  };



getAllDisorders = () => {     
    API.getDisData()
        .then(res => { 
        this.setState({
            disorders: res.data                
        })      
    })          
};

// getOneDisorder = (disorderUsing) => {
//     API.getThisDisData()
//         .then(res => {
//             console.log('get this disorder booooyyyy')
//             this.setState({
//                 disorderUsing: res.data
//             })
//             console.log(res.data)
//         })
//         console.log(this.state.disorders)
// }


changeViewHandler = using => {
    console.log('i made it here ')
    this.setState({
        backDropView: using
    })
}

nextCardHandler = () => {
    API.getNextCard(this.state.iCard._id+1)
        .then(res => { 
        this.setState({
            iCard: {
                _id: res.data._id,
                likes: res.data.likes,
                dislikes: res.data.dislikes,
                makingNote: false,
                content: res.data.content        
            }       
        })      
        console.log(res.data)
        })          
  };

prevCardHandler = () => {
    API.getLastCard(this.state.iCard._id-1)
    .then(res => { 
    this.setState({
        iCard: {
            _id: res.data._id,
            likes: res.data.likes,
            dislikes: res.data.dislikes,
            makingNote: false,
            content: res.data.content        
        }       
    })      
    console.log(res.data)
    console.log(this.state.iCard._id)
    })          
};

  render() {
    return (
        <div id="MainPage">

            <Navbar header="I Believe"/>
        
            <Row id="main-bd-row"> 
                <Col id="" size="md-2">
                    <Card id="button-card" >
                        {/* <BackDrop view={brainView.img} /> */}
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
                    <Card id="note-card">
                        <Col size="md-12" className="center">
                            <Card
                                id="note-card-content"
                                 front = {this.state.iCard.content.front}
                                 back = {this.state.iCard.content.back}
                                >
                            </Card>
                        </Col>
                    

                        <Col size="md-12">                
                            {this.state.iCard._id === 1 ?
                            <Row id="btnR">
                                <Btn disabled click={this.prevCardHandler}>Back</Btn>
                                <Btn click={this.nextCardHandler}>Next</Btn>                    
                            </Row> :
                            <Row id="btnR">
                                <Btn click={this.prevCardHandler}>Back</Btn>
                                <Btn click={this.nextCardHandler}>Next</Btn>                    
                            </Row>
                            }                    
                    </Col>
            
                </Card>



                </Col>
                <Col size="md-3">
                    <Card id="length">
                    {this.state.disorders.map(disorder => (
                        // <Disorders 
                        // title={disorder.name}
                        // />

                        <Disorders 
                        title={disorder.name}
                        description={disorder.summary}
                        h31='Brain Architecture'
                        structureData={disorder.brainArchitecture}
                        h32='NeuroChemistry'
                        chem={disorder.neuroChem}
                        h33='Famous Studies'
                        studies={disorder.studies}
                        
                        />
                                )
                            )
                        };
                    </Card>
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
