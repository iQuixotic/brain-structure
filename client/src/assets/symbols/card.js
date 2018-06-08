import React from "react";
import './style.css';
import {Icon} from 'react-fa';

// a plus sign icon
const CardIcon = (props) => {
    return(
    <div id="CardIcon">
         <Icon name="fab fa-accusoft" size={props.size} className={props.cn} />
    </div>
    );
}

export default CardIcon;