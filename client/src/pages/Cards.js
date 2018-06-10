import React, { Component } from "react";
import {Navbar, Footer} from "../components/nav/index";
import {Like, Dislike} from "../components/buttons/index";
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
  this.getAllPublicCards();
}

getAllPublicCards = () => {     
  API.getAllPublicCards()
      .then(res => { 
      this.setState({
          liCards: res.data                
      })      
      })          
};

frontOrBack = () => {  
  Card.flipUpdateHandler() 
}

  render() {
    return (
      <Wrap>
          <Navbar header="The Great and Powerful Cards"/>
          <Wrap cn="pad"/>
            <Container>

{/* Row 1               */}
           
          {this.state.liCards.map(liCard => (
            
    <Wrap id="pageWrap">
            <Card id="cp-cards"
            ref = {this.child}
            flipUpdateHandler={this.flipUpdateHandler}
            frontOrBack={this.frontOrBack}
            front = {liCard.content.front}
            back = {liCard.content.back}
            className="safe-div"
           
>
          
            {/* Inner Card row for bottom */}
            <Wrap id="mini-card-d2">
              <Row>
                <Col size="md-4">
                  <input type="checkbox" className="bl" />
                  <label className="bll" for="bl">Add</label>
                </Col>
                <Col size="md-5" />
                <Col size="md-3">
                  <Row> 
                    <Dislike size="2x" cn="bl" />
                    <Col size="md-1" />
                    <Like size="2x" cn="bl"/>                          
                  </Row>
                </Col>
              </Row>   
            </Wrap>              
          </Card>   
          </Wrap>
          
          ))}
          </Container>
          <Footer />
        </Wrap>
    );
  }
}

export default CardPage;
