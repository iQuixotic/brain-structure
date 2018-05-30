import React, { Component } from 'react';
import Card from './Card'
import { Row, Container, Col } from '../Grid/Z-index';
import './style-card.css';

// a card for Large notes
class NoteCardL extends Component {
constructor(props){
    super(props)
}
state = {
something: 'value'
}

    render() {
        return(
        <div id="NoteCardLCrd">
            <Card traits="note-card">
                  <h1> I made this to See !! </h1>
            </Card>
        </div>
        );
    }
}

export default NoteCardL;


// right here if I try to extend class card, it doesnt like that. there is 
// a lot here to look at !!!!!!!!!