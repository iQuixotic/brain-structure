import React, { Component } from "react";
import {Navbar, Footer} from "../components/nav/index";
import {Like, Dislike, DeleteBtn, Btn} from "../components/buttons/index";
import {Container, Wrap, Row, Col} from "../components/grid/index";
import {Card} from '../container/Card/index';
import API from '../utils/API';
import './pages.css';

let data;
let holding = [];
let index;
class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liCards: [], 
      prepGroup: [],
      deckName: ['']
    }
  }

componentWillMount = () => {
  this.getAllFromStore();
}

getAllFromStore = () => {     
  API.getAllFromStore()
      .then(res => { 
      this.setState({
          liCards: res.data                
      })      
      })          
};


checkLiCard = (id, content) => {
  data = {
      content: content,
      id: id
  }
  let thisInput = document.getElementById(id)
 
  thisInput.checked ?
  this.addToGroup(data) :
  this.takeFromGroup(data, id)
}

addToGroup = (data) => {
  holding.push(data)
  this.setState({
    prepGroup: holding
  })

  console.log(this.state.prepGroup)
}



takeFromGroup = (data, id) => {

  let index = holding.findIndex(obj => obj.cards.id === data.cards.id)
  holding.splice(index, 1) 

  this.setState({
    prepGroup: holding
  })
  console.log(this.state.prepGroup) 
}

// addLiCard = (id, content, deckTitle) => {
//   let data = {
//     title: deckTitle,
//     cards:{
//       content: content,
//       id: id
//     }
//   }
  
//   API.addCardById(data);
//   console.log('i clicked')
//   console.log(id)
// }

regChangeHandler = event => {
  this.setState({[event.target.name]: [event.target.value]});
  console.log(this.state.deckName );  
}

regSubmitHandler = () => {
  console.log('subbbbbbbbbbmmmmmmmmmiiiittttttttteeeeeeddddddddd')
  data = {
    title: this.state.deckName[0],
    cards: this.state.prepGroup
  }

  API.postNewDeck(data);

  
  console.log(data)
  
  // API.postRegData({
  //     title: title,
  // }).then(res =>
      this.setState({ deckName: "" })
    // )
    // .catch(err => console.log(err));
}

  render() {
    return (
      <Wrap>
          <Navbar header="Neuro-Cards"/>
          <Wrap cn="pad"/>
            <Container>
           

          {this.state.liCards.map(liCard => (
            <ul>
              <li>
    <Wrap id="pageWrap">
            <Card id="cp-cards"
            ref = {this.child}
            flipUpdateHandler={this.flipUpdateHandler}
            isChecked={this.isChecked}
            frontOrBack={this.frontOrBack}
            front = {liCard.content.front}
            back = {liCard.content.back}
            conClass="safe-divs">
       
          
            {/* Inner Card row for bottom */}
            <Wrap id="mini-card-d2">
              <Row>  
                <Col size="md-3">
                  <input id={liCard._id} type="checkbox" className="bl" name="liCard"
                  onClick={() => this.checkLiCard(liCard._id, liCard.content, "myDeck")}/> 
                  <label className="bll" for="bl">Add</label>
                </Col>
                <Col size="md-6" />
                <Col size="md-3">
                  <Row> 
                    <Dislike size="2x" cn="bl" />
                    <Col size="md-1" />
                    <Like size="2x" cn="bl"/>   
                    <Col size="md-6" />                
                  </Row>
                </Col>
              </Row>   
            </Wrap>              
          </Card>   
          </Wrap>
          </li>
          </ul>
          ))}
          <Row>
            <Wrap cn="deck-form">
              <input id="deck-input" size="40"
              name="deckName"
              value={this.state.deckName}
               onChange={this.regChangeHandler.bind(this)} 
              placeholder="deck name here..." />
              <Btn click={this.regSubmitHandler}type="submit">SUBMIT</Btn>
            </Wrap>
          </Row>
          </Container>
          <Footer />
        </Wrap>
    );
  }
}

export default CardPage;
