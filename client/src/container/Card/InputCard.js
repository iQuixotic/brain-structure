import React, {Component} from 'react';
import {Btn} from '../../components/buttons/index';
import {Row} from '../../components/grid/index';
import {Card} from './index';
import API from '../../utils/API';
import './style.css';
import '../../index.css';


class InputCard extends Component {

state = {
    cardType: true,
    notesInput: '',
    linkInput: '',
    summaryInput:''
}

radioChangeHandler = () => {
    this.checked="checked"
    document.getElementById("Research").checked ?
    this.setState({
        cardType: false
    }) :
    this.setState({
        cardType: true
    })
    console.log(this.state.cardType)
}

handleNoteSubmit = (arg) => {
    console.log('handle Note Submit called ')
    API.createNote({
        notesInput: arg,
        deckNum: 0
    });
}

handleCardSubmit = (arg, arg2) => {
    let data = {
        linkInput: arg,
        summaryInput: arg2
        }
    console.log('handle Card Submit called ') 
    API.createCard(data);
}

noteSubmitHandler = () => {   
    let notesInput = this.state.notesInput;
    let linkInput = this.state.linkInput;
    let summaryInput = this.state.summaryInput;

    this.state.cardType ?
    this.handleNoteSubmit(notesInput) :
    this.handleCardSubmit(linkInput, summaryInput)
};

inputChangeHandler = event => {
    this.setState({[event.target.name]: [event.target.value]});
    console.log(this.state.notesInput, this.state.linkInput, this.state.summaryInput );
}

    render() {
        return(
        <div id={this.props.id} className={this.props.cn}>
        
            <Card id="note-input-crd">
                <form className="form-control pretty-form">
                
                <input id="My Notes" defaultChecked={true} 
                onClick={this.radioChangeHandler} type="radio" name="input" />
                <label className="lab" for="Notes">My Notes</label>
               
                <input id="Research" onClick={this.radioChangeHandler} 
                type="radio" name="input" />
                <label className="lab" for="Research">Research Studies</label>
                {
                    this.state.cardType ?

                        <textarea value={this.state.notesInput} name="notesInput" 
                        onChange={this.inputChangeHandler.bind(this)} className="input-field size" type="text" 
                        rows="9" placeholder="...my notes here" /> :

                    <div>                        
                        <textarea value={this.state.linkInput} name="linkInput" 
                        onChange={this.inputChangeHandler.bind(this)} className="input-field marg1" type="text" 
                        rows="2" placeholder="...link" />

                        <textarea value={this.state.summaryInput} name="summaryInput" 
                        onChange={this.inputChangeHandler.bind(this)} className="input-field marg2" type="text" 
                        rows="5" placeholder="...summary" />
                    </div>
                }
                    
                    <Row id="input-crd-btn-row">
                        <Btn disabled >Make</Btn> 
                        <Btn onClick={this.noteSubmitHandler}>Add</Btn>
                        <Btn disabled onClick={this.updateNote}>Edit</Btn> 
                    </Row>
                </form>
            </Card>
        </div>
    );
}
}

export default InputCard;

