import React from "react";
import './style.css';
import {Icon} from 'react-fa';

// a plus sign icon
const Plus = (props) => {
    return(
    <div id="Plus">
         <Icon name="fas fa-plus" size={props.size} className={props.cn} />
    </div>
    );
}

export default Plus;