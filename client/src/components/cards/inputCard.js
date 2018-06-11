import React, {Component} from 'react';
import {Btn} from '../buttons/index';
import {Row} from '../grid/index';
import {Card} from '../../container/Card/index';
import './style.css';
import '../../index.css';


class InputCard extends Component {
state = {
    cardType: true
}
componentDidUpdate = () => {
    console.log(this.state.cardType)
}

inputChangeHandler = () => {
    this.checked="checked"
    document.getElementById("Research").checked ?
    this.setState({
        cardType: false
    }) :
    this.setState({
        cardType: true
    })
}

    render() {
        return(
        <div id={this.props.id} className={this.props.cn}>
        
            <Card id="note-input-crd">
                <form className="form-control pretty-form">
                
                <input id="My Notes" defaultChecked={true} onClick={this.inputChangeHandler} type="radio" name="input" />
                <label className="lab" for="Notes">Notes</label>
               
                <input id="Research" onClick={this.inputChangeHandler} type="radio" name="input" />
                <label className="lab" for="Research">Research Studies</label>
                {
                    this.state.cardType ?
                    <textarea className="input-field size" type="text" name="name" rows="9" placeholder="...my notes here" /> :
                    <div>
                    <textarea className="input-field marg1" type="text" name="name" rows="2" placeholder="...link" />
                    <textarea className="input-field marg2" type="text" name="name" rows="5" placeholder="...summary" />
                    </div>
                }
                    
                    <Row id="input-crd-btn-row">
                        <Btn disabled >Make</Btn> 
                        <Btn onClick={this.handleNoteSubmit}>Add</Btn>
                        <Btn onClick={this.updateNote}>Edit</Btn> 
                    </Row>
                </form>
            </Card>
        </div>
    );
}
}

export default InputCard;

