import React from "react";
import {Icon} from 'react-fa';
import './style.css';


// a Navigation button or perhaps used on large screens
const FwdCaret = (props) => {
    return(
    <div id="FwdCaret">
         <Icon name="caret-right" onClick={props.click} size={props.size} className="fwd-caret" />
    </div>
    );
}

export default FwdCaret;
