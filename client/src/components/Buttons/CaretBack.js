import React from "react";
import {Icon} from 'react-fa';
import './style.css';
 
// a Navigation button for backward nav
const BackCaret = (props) => {
    return(
    <div id="BackCaret">
         <Icon name="caret-left" onClick={props.click} size={props.size} className="back-caret" />
    </div>
    );
}

export default BackCaret;

