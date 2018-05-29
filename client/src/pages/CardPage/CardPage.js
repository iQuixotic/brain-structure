import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class CardPage extends Component {
  state = {
    CardSet: 1
  };
  // When this component mounts, grab ten content cards 
  // for adademic value/validity to be judged
  componentDidMount() {
    API.getTen(this.props.match.params.id)
      .then(res => this.setState({ card: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                  You Decide !!
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
          <Col size="md-4 md-offset-1">
            <NoteCardS>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Previous</Link>
          </Col>
          <Col size="md-2">
            <Link to="/">Next ←</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CardPage;
