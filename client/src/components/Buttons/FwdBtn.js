import React from "react";
import './style-btn.css';
import {Icon} from 'react-fa';

// a Navigation button or perhaps used on large screens
const FwdBtn = (props) => {
    return(
    <div id="FwdBtn">
         <Icon name="caret-right" size={props.size} className="fwd-caret" />
    </div>
    );
}

export default FwdBtn;

