import React, {Component} from 'react';
import {Btn} from '../../components/buttons/index';
import {Row} from '../../components/grid/index';
import {Card} from './index';
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
}

handleNoteSubmit = () => {
    console.log('handle Note Submit called ') 
}

handleCardSubmit = () => {
    console.log('handle Card Submit called ') 
}

NoteSubmitHandler = () => {   

    this.state.cardType ?
    console.log('im doing thiiiiiiiisssssssss') :
    console.log('im doing thaaaaaaaaaaaattttt')
    // let userName = this.state.nameU;
    // let firstName = this.state.nameF;
    // let lastName = this.state.nameL;
    // let email = this.state.email;
    // let password = this.state.pass;   
    
    // API.postRegData({
    //     userName: userName,
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password      
    // }).then(res =>
    //     this.setState({nameU: "", nameL: "", nameF: "", email: "", pass: "", pwordCheck: "" })
    //   )
    //   .catch(err => console.log(err));
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
                <label className="lab" for="Notes">Notes</label>
               
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

