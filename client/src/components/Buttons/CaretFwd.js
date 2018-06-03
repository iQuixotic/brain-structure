import React from "react";
import './style.css';
import {Icon} from 'react-fa';

// a Navigation button or perhaps used on large screens
const FwdCaret = (props) => {
    return(
    <div id="FwdCaret">
         <Icon name="caret-right" size={props.size} className="fwd-caret" />
    </div>
    );
}

export default FwdCaret;
