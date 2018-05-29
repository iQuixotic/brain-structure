import React, { Component } from 'react';
import Card from '../Simple/Card'
import { Row, Container, Col } from '../../Grid';
import './NoteCardL.css';

// a card for Large notes
class NoteCard extends Component {
constructor(props){
    super(props)
}
state = {
something: 'value'
}

    render() {
        return(
        <div>
            <Card traits="NoteCard">
                  <h1> I made this to See !! </h1>
            </Card>
        </div>
        );
    }
}

export default NoteCard;


// right here if I try to extend class card, it doesnt like that. there is 
// a lot here to look at !!!!!!!!!