import React from "react";
import './style-btn.css';
import {Icon} from 'react-fa';

// a Navigation button or perhaps used on large screens
const Plus = (props) => {
    return(
    <div id="Plus">
         <Icon name="fas fa-plus" size={props.size} className={props.cn} />
    </div>
    );
}

export default Plus;