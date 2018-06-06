import React from 'react';
import {Btn} from '../Buttons/Z-index';
import Card from './Card';
import {Row} from '../Grid/Z-index';
import './style.css';
import '../../Uni.css';

const InputCard =(props) => {
        return(
        <div id={props.id} className={props.cn}>
        
            <Card id="note-input-crd">
                <form className="form-control pretty-form">
                    <textarea className="input-field" type="text" name="name" rows="11" />
                    <Row id="input-crd-btn-row">
                        <Btn>Make</Btn> 
                        <Btn>Add</Btn>
                    </Row>
                </form>
            </Card>
        </div>
    );
}

export default InputCard;

