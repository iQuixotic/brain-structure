import React from "react";
import './style-btn.css';
import {Icon} from 'react-fa';
 
// a Navigation button for backward nav
const BackBtn = (props) => {
    return(
    <div id="BackBtn">
         <Icon name="caret-left" size={props.size} className="back-caret" />
    </div>
    );
}

export default BackBtn;

