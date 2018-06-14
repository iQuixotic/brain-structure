import React, { Component } from "react";
import {Navbar, Footer} from "../components/nav/index";
import {Like, Dislike, DeleteBtn} from "../components/buttons/index";
import {Container, Wrap, Row, Col} from "../components/grid/index";
import {Card} from '../container/Card/index';
import API from '../utils/API';
import './pages.css';



class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liCards: [], 
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

frontOrBack = () => {  
  Card.flipUpdateHandler() 
}

addLiCard = (id, content) => {
  let data = {
    content: content,
    id: id
  }
  
  API.addCardById(data);
  console.log('i clicked')
  console.log(id)
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
            frontOrBack={this.frontOrBack}
            front = {liCard.content.front}
            back = {liCard.content.back}
            conClass="safe-divs">
       
          
            {/* Inner Card row for bottom */}
            <Wrap id="mini-card-d2">
              <Row>
                <Col size="md-3">
                  <input type="checkbox" className="bl"
                  onClick={() => this.addLiCard(liCard._id, liCard.content)}/>
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
          </Container>
          <Footer />
        </Wrap>
    );
  }
}

export default CardPage;
