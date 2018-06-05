import React, { Component } from 'react';
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
                        <button className="btn my-btn">Make</button> 
                        <button className="btn my-btn">Add</button>
                    </Row>
                </form>
            </Card>
        </div>
        );
}

export default InputCard;

