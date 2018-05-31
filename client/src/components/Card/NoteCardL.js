import React, { Component } from 'react';
import Card from './Card';
import { Btn } from '../Buttons/Z-index';
import { Row, Container, Col } from '../Grid/Z-index';
import { Div, DivR, DivL, DivC } from '../Div/Z-index'
import './style-card.css';

//has state
// a card for Large notes
class NoteCardL extends Component {
constructor(props){
    super(props)
}
state = {
peerValidation: 0,
note: "",
Content: "",
Side: true,
blank: false,
revove: false
}

    render() {
        return(
        <div id="NoteCardLCrd">
            <Card traits="note-card">
                <Col size="md-12" className="center">
                    <Row>
                        <Card traits="note-card-content">
                            I have all of the content that anyone could ever want, right here !!!
                        </Card>
                    </Row>
                </Col>
                <Col size="md-12">
                    <Row traits="btnR">
                        <Btn cn="note-btn">Back</Btn>
                        <Btn cn="note-btn">Next</Btn>                    
                    </Row>
                </Col>
            </Card>
        </div>
        );
    }
}

export default NoteCardL;


// right here if I try to extend class card, it doesnt like that. there is 
// a lot here to look at !!!!!!!!!