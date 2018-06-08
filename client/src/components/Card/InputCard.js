import React from 'react';
import {Btn} from '../Buttons/index';
import {Card} from '../../container/Card/index';
import {Row} from '../Grid/index';
import './style.css';
import '../../index.css';

const InputCard = (props) => {
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

