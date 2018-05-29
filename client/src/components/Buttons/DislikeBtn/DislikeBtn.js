import React from "react";
import './DislikeBtn.css'
import {Icon} from 'react-fa';

const DislikeBtn = (props) => {
    return(
    <div>
         <Icon name="thumbs-down" size={props.size} className="thumbs-down" />
    </div>
    );
}

export default DislikeBtn;





