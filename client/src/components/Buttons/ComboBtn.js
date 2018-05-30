import React from "react";
import './style-btn.css';
import { Row } from '../Grid/Z-index';

// a reuseable combo button 
const ComboBtn = (props) => {
    return(
    <div id="ComboBtn" className="btn-combo">
        <Row>
            <button className={props.cl1}>{props.side1}</button>
            <button className={props.cl2}>{props.side2}</button>
        </Row>
    </div>
    );
}

export default ComboBtn;

