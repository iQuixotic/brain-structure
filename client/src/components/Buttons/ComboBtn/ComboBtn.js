import React from "react";
import Btn from '../GenericBtn/GenericBtn';
import './ComboBtn.css'
import { Row } from '../../Grid'

// a reuseable combo button 
const ComboBtn = (props) => {
    return(
    <div className="btn-combo">
        <Row>
            <button className={props.cl1}>{props.side1}</button>
            <button className={props.cl2}>{props.side2}</button>
        </Row>
    </div>
    );
}

export default ComboBtn;

