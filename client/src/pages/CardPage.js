import React, { Component } from "react";
import {Navbar, Footer} from "../components/Nav/Z-index";
import {Card} from '../container/Card/index';
import {LikeBtn, DislikeBtn} from "../components/Buttons/Z-index";
import {Container, Wrap, Row, Col} from "../components/Grid/Z-index";
import './Pages.css';


class CardPage extends Component {
// constructor(props) {
//   super(props)
// }

//   state = {
    
//   };

  render() {
    return (
      <Wrap>
          <Navbar header="The Great and Powerful Cards"/>
          <Wrap cn="pad"/>
            <Container>

{/* Row 1               */}
              <Row>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

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
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner Card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

                    {/* Inner Card row bottom */}
                    <Wrap id="mini-card-d2">
                      <Row>
                        <Col size="md-4">
                          <input type="checkbox" className="bl" />
                          <label className="bll" for="bl">Add</label>
                        </Col>
                        <Col size="md-5" />
                        <Col size="md-3">
                          <Row> 
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>

              </Row>

{/* Row 2               */}
              <Row>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

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
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner Card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

                    {/* Inner Card row bottom */}
                    <Wrap id="mini-card-d2">
                      <Row>
                        <Col size="md-4">
                          <input type="checkbox" className="bl" />
                          <label className="bll" for="bl">Add</label>
                        </Col>
                        <Col size="md-5" />
                        <Col size="md-3">
                          <Row> 
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>

              </Row>

{/* Row 3               */}
              <Row>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

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
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner Card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

                    {/* Inner Card row bottom */}
                    <Wrap id="mini-card-d2">
                      <Row>
                        <Col size="md-4">
                          <input type="checkbox" className="bl" />
                          <label className="bll" for="bl">Add</label>
                        </Col>
                        <Col size="md-5" />
                        <Col size="md-3">
                          <Row> 
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>

              </Row>

{/* Row 4               */}
              <Row>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

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
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner Card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

                    {/* Inner Card row bottom */}
                    <Wrap id="mini-card-d2">
                      <Row>
                        <Col size="md-4">
                          <input type="checkbox" className="bl" />
                          <label className="bll" for="bl">Add</label>
                        </Col>
                        <Col size="md-5" />
                        <Col size="md-3">
                          <Row> 
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>

              </Row>

{/* Row 5               */}
              <Row>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

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
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>
                <Col size="md-6">
                  <Card id="cp-cards">

                    {/* Inner Card row for content */}
                    <Wrap id="mini-card-d1">
                      <Row> 
                        <p> So much words go here that i cant count them all. I peck
                          away on the keyboard and then i have all the words for me to
                          look at on a card and test. </p>
                      </Row>
                    </Wrap>

                    {/* Inner Card row bottom */}
                    <Wrap id="mini-card-d2">
                      <Row>
                        <Col size="md-4">
                          <input type="checkbox" className="bl" />
                          <label className="bll" for="bl">Add</label>
                        </Col>
                        <Col size="md-5" />
                        <Col size="md-3">
                          <Row> 
                            <DislikeBtn size="2x" cn="bl" />
                            <Col size="md-1" />
                            <LikeBtn size="2x" cn="bl"/>                          
                          </Row>
                        </Col>
                      </Row>   
                    </Wrap>              
                  </Card> 
                </Col>

              </Row>
              
          </Container>
          <Footer />
        </Wrap>
    );
  }
}

export default CardPage;
