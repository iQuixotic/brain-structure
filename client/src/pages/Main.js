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
import {CardIcon} from '../assets/symbols/index';

let startingBD = {img: fc}
let brainView = {img: brain3d}

let decksNumber = 0;
let i = 1;
let j = 0;
class MainPage extends Component {
constructor(props) {
    super(props)
    this.state = {
        backDropView: startingBD.img,
        noteCards: 'df',
        noteCard: {
            content: {
                front: '',
                back: ''
            }
        },
        toggleNotes: true,
        disorders: [],
        disorderUsing: 'Schizophrenia',
        useNotes: true,
        decksShowing: [],
        decksNames: [{name: 'deck 1'}, {name: 'my deck 2'}, {name: 'Fire Deck 3'}, {name: 'Water Deck 4'}, 
        {name: 'deck 5'}, {name: 'my deck 6'}, {name: 'Fire Deck 7'}, {name: 'Water Deck 8'},
        {name: 'deck 9'}, {name: 'my deck 10'}, {name: 'Fire Deck 11'}, {name: 'Water Deck 12'}]
        
    }
}


componentWillMount= () => {
    this.getAllDisorders();
    this.getAllPublicCards();
 
  }


adjustDecksShowing = () => {
    
    console.log(decksNumber)
    this.setState({
        decksShowing: [this.state.decksNames[decksNumber].name, 
        this.state.decksNames[decksNumber+1].name,
        this.state.decksNames[decksNumber+2].name]
    })
    console.log(this.state.decksShowing)
}

deckShowDecrement = () => {
    {    
        this.state.decksNames[decksNumber-6] ?    
        decksNumber -=3 : 
            (this.state.decksNames[decksNumber-5] ?
            decksNumber -=2 :
                (
                    (this.state.decksNames[decksNumber-4] ?
                        decksNumber -- : decksNumber=0
                    )
                )
            )
        }
        this.adjustDecksShowing()
        console.log(decksNumber)
}

deckShowIncrement = () => {
    {    
    this.state.decksNames[decksNumber+6] ?    
    decksNumber +=3 : 
        (this.state.decksNames[decksNumber+5] ?
        decksNumber +=2 :
            (
                (this.state.decksNames[decksNumber+4] ?
                    decksNumber ++ : decksNumber=this.state.decksNames.length-3
                )
            )
        )
    }
    this.adjustDecksShowing()
    console.log(decksNumber)
}

  
  getAllPublicCards = () => {
      i=1;
      j=0;
      API.getAllPublicCards()
      .then(res => {
        this.setState({
          
          noteCards: res.data,
          noteCard: res.data[i]
      })
      console.log(this.state.noteCards)
      console.log(res.data[i])
    //   available = this.state.noteCards.length;
    //   console.log(available)
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
        i++;
        j++;
        this.setState({
            noteCard: this.state.noteCards[j],                         
        })      
        console.log(j)
  };

prevCardHandler = () => {
    i--;
    j--;
    this.setState({
        noteCard: this.state.noteCards[j],     
        })       
    console.log(j)
};

deleteCard = (id, next) => {
    i=1;
    j=0;
    console.log(id)
    API.deleteCard(id ,next)
    .then(() => next());
}

toggleNotes = () => {
    let notesUsed = this.state.useNotes;
    this.setState({
        useNotes: !notesUsed
    })
    console.log(this.state.useNotes)
}

  render() {
   
    return (
        // this.state.noteCard.content == undefined  ?
        // <div><h1>I'm a little slow, so please don't make fun of me while i load...</h1></div> :

        <div id="MainPage">

            <Navbar header="Neuro-Cards"/>
        
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

                     {/* {this.state.decksNames.map(deck => (
                    contentBack={this.state.name}
                            )
                        )
                    } */}

                    <MyDecks 
                    contain="deck-contain"
                    cn="deck-transform deck-contain"
                    side1="deck-side card my-card"
                    side2="deck-side deck-back"
                   contentBack={
                    <div>
                        <div>
                            {this.state.decksNames[decksNumber].name}
                        </div>
                        <div>
                            {this.state.decksNames[decksNumber+1].name}
                        </div>
                        <div>
                            {this.state.decksNames[decksNumber+2].name}
                        </div>
                        <button onClick={this.deckShowDecrement}>see Prev</button>
                        <button onClick={this.deckShowIncrement}>see next</button>
                    </div>
                   }
                    >
                   
                    </MyDecks>

                </Col>
            </Row>

            <Row id="index-card-row">
                <Col id="input-col" size="md-3">
                    <InputCard />
                </Col>
                <Col id="crd-col" size="md-6">
                    <Card id="note-card">
                        <Col size="md-12" className="center">
                        <CardIcon 
                                click={this.toggleNotes}
                                size="2x"
                                cn='my-icon'
                                />
                                {
                                    this.state.useNotes ?
                                    <div className="looking-at">My Notes</div> :
                                    <div className="looking-at">Research Studies</div>
                                 }
                            <Card
                                 id="note-card-content"                                 
                                 front = {this.state.noteCard.content.front}
                                 back = {this.state.noteCard.content.back}
                                 conClass="card-content-class"
                                >
                              
                                <DeleteBtn
                                click={this.deleteCard.bind(this, this.state.noteCard._id, this.getAllPublicCards)}
                                className="del-class"/> 

                                <Col size="md-12">      

                                <Row id="btnR">                                
                                    {
                                        <div className="white"> {i}/{this.state.noteCards.length} </div>
                                    }

                                     {this.state.noteCard !== this.state.noteCards[0] && j !== 0 ?
                                        (
                                            this.state.noteCard !== this.state.noteCards[this.state.noteCards.length-1] 
                                            && j !== 0 ?
                                            <div>
                                                <Btn click={this.prevCardHandler}>Back</Btn>
                                                <Btn click={this.nextCardHandler}>Next</Btn>
                                            </div> :
                                            <div>
                                                <Btn click={this.prevCardHandler}>Back</Btn>
                                                <Btn disabled>Next</Btn> 
                                            </div>
                                        ) :
                                            <div>
                                                <Btn disabled>Back</Btn>
                                                <Btn click={this.nextCardHandler}>Next</Btn> 
                                            </div>
                                    }
                                </Row>                            
                                                 
                    </Col>


                            </Card>
                        </Col>
                    
                    
                      
                   
            
                </Card>



                </Col>
                <Col size="md-3">
                    <Card id="length">
                    {this.state.disorders.map(disorder => (
                        <Disorders 
                        disorder="dis-name"
                        cnHeaders="dis-headers"
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
