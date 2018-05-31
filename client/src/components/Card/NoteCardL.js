import React, { Component } from 'react';
import Card from './Card';
import { Btn, Plus } from '../Buttons/Z-index';
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
                            <Div cn="float-right green pad-right">
                            {/* Dynamic plus or minus signs to be printed depending validity ratio */}
                                <Row>                                                               
                                    <Plus size="2x"  />
                                    <Plus size="2x"  />                   
                                </Row>
                            </Div>
                            <Row>
                                {/* Content must be mapped over to know which card to display... a 
                                ternary operator will be used to decide whether to dispay the front or back */}
                                <Div cn="front">
                                    I have all of the content that anyone could ever want, right here !!!
                                </Div>
                            </Row>
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