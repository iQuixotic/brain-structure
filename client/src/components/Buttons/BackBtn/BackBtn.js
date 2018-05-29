import React from "react";
import './BackBtn.css';
import {Icon} from 'react-fa'
 

// a Navigation button for backward nav
const FwdBtn = (props) => {
    return(
    <div>
         <Icon name="caret-left" size={props.size} className="back-caret" />
    </div>
    );
}

export default FwdBtn;

