import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Footer} from '../components/nav/index';
import {CardSpace, BackDrop, MyDecks} from '../components/cards/index';
import {Btn, DeleteBtn} from '../components/buttons/index';
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

let i = 1;
// let contentHolder = [];
class MainPage extends Component {
constructor(props) {
    super(props)
    this.state = {
        backDropView: brainView.img,
        noteCards: 'df',
        noteCard: {
            content: {
                front: '',
                back: ''
            }
        },
        i:1,
        disorders: [],
        disorderUsing: 'Schizophrenia'
    }
}


componentWillMount= () => {
    this.getAllDisorders();
    this.getAllPublicCards();
 
  }
  
  getAllPublicCards = () => {
      API.getAllPublicCards()
      .then(res => {
        this.setState({
          
          noteCards: res.data,
          noteCard: res.data[this.state.i]
      })
      console.log(res.data[this.state.i])
    //   console.log(this.state.noteCard)
    })
  }

  pleaseWork = () => {
      console.log('please work')
  }



getAllDisorders = () => {     
    API.getDisData()
        .then(res => { 
        this.setState({
            disorders: res.data                
        })      
    })          
};


changeViewHandler = using => {
    console.log('i made it here ')
    this.setState({
        backDropView: using
    })
}

nextCardHandler = () => {
     
        this.setState({
            i: this.state.i+1,
            noteCard: this.state.noteCards[this.state.i],                         
        })      
        console.log(this.state.noteCard.content.front)

  };

prevCardHandler = () => {
  
    this.setState({
        i: this.state.i-1,
        noteCard: this.state.noteCards[this.state.i],     
        })       
    console.log(this.state.noteCard)
    console.log(this.state.i)
     
};

deleteCard = async () => {
    console.log(this.state.noteCard._id)
    API.deleteCard(this.state.noteCard._id)
    .then(res => {
        this.setState({
            i:1,
            noteCards: this.state.noteCards,
            noteCard: this.state.noteCards[this.state.i]
    })

});
}

  render() {
   
    return (
        // this.state.noteCard.content == undefined  ?
        // <div><h1>I'm a little slow, so please don't make fun of me while i load...</h1></div> :

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
                                 front = {this.state.noteCard.content.front}
                                 back = {this.state.noteCard.content.back}
                                 conClass="card-content-class"
                                >
                                <DeleteBtn
                                click={this.deleteCard}
                                className="del-class"/> 

                            <Col size="md-12">                
                            {this.state.noteCard == this.state.noteCards[1] ?
                            <Row id="btnR">
                                <Btn disabled>Back</Btn>
                                <Btn click={this.nextCardHandler}>Next</Btn>                    
                            </Row>  :
                            <Row id="btnR">
                                <Btn click={this.prevCardHandler}>Back</Btn>
                                <Btn click={this.nextCardHandler}>Next</Btn>                    
                            </Row>
                            }                    
                    </Col>


                            </Card>
                        </Col>
                    
                    
                      
                   
            
                </Card>



                </Col>
                <Col size="md-3">
                    <Card id="length">
                    {this.state.disorders.map(disorder => (
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
