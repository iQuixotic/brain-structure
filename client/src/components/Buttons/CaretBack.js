import React from "react";
import './style.css';
import {Icon} from 'react-fa';
 
// a Navigation button for backward nav
const BackCaret = (props) => {
    return(
    <div id="BackCaret">
         <Icon name="caret-left" size={props.size} className="back-caret" />
    </div>
    );
}

export default BackCaret;

