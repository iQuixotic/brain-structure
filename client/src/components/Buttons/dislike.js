import React from "react";
import './style.css'
import {Icon} from 'react-fa';

const DislikeBtn = (props) => {
    return(
    <div id="DislikeBtn">
         <Icon name="thumbs-down" onClick={props.click} size={props.size} className="thumbs-down" />
    </div>
    );
}

export default DislikeBtn;





